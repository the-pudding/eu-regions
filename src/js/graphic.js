/* global d3 */
import * as topojson from 'topojson';
import {select} from '../js/utils/dom.js';
import 'intersection-observer';
import scrollama from 'scrollama';

function resize() {}

function init() {
	let width = select(".mapcontainer").clientWidth;
	//let ratio = 0.7;
	//let height = width*ratio;
	let height = select(".mapcontainer").clientHeight;
	let mapOne = d3.select("svg#mapone")
		.attr("width", width)
		.attr("height", height);

	let	center = [5, 75];
	let scale = 1000;
	//let projection = d3.geoMercator()
	let projection = d3.geoAzimuthalEqualArea();
		//.scale(scale)
		//.translate([300, 0]).center(center);
	let path = d3.geoPath()
		.projection(projection);
	
	//d3.json("assets/data/NUTS_RG_20M_2013_4326_LEVL_2.json", function(nuts2) {
	d3.json("assets/data/NUTS2_20M_2013_topo.json", function(nuts2) {
		d3.json("assets/data/NUTS_RG_20M_2013_4326_LEVL_0.json", function(nuts0) {
			d3.json("assets/data/land.json", function(land) {
				d3.json("assets/data/capitals.json", function(capitals) {
					d3.csv('assets/data/regiondata.csv', function(gdp){
						
						gdp.forEach(function(el){
							el.pps = +el.gdppps16;
						});

						const scroller = scrollama();
						scroller.setup({
							step: ".step"
						})
						.onStepEnter(handleStepEnter);

						function handleStepEnter(step){
							d3.selectAll(".step").classed("is-active", false);
							d3.select(step.element).classed("is-active", true);

							if(step.index == 2 && step.direction == "down"){
								d3.selectAll(".country")
									.style("fill-opacity", 0);
							}
							if(step.index == 1 && step.direction == "up"){
								d3.selectAll(".country")
									.style("fill-opacity", 1);
							}

							if(step.index == 5 && step.direction == "down"){
								regions.style("fill", (d) => absfundScale(d.properties.totalpayments0716))
							}
							if(step.index == 4 && step.direction == "up"){
								regions.style("fill", (d) => devscale(d.properties.gdppps16))
							}
							
							if(step.index == 6 && step.direction == "down"){
								regions.style("fill", (d) => percapitafundScale(d.properties.totalpercapita0716))
							}
							if(step.index == 5 && step.direction == "up"){
								regions.style("fill", (d) => absfundScale(d.properties.totalpayments0716))
							}

							if(step.index == 7 && step.direction == "down"){
								regions.style("fill", (d) => fundpercgdpScale(d.properties.fundpercgdp15))
							}
							if(step.index == 6 && step.direction == "up"){
								regions.style("fill", (d) => percapitafundScale(d.properties.totalpercapita0716))
							}

							if(step.index == 8 && step.direction == "down"){
								regions.style("fill", (d) => devscale(d.properties.gdppps16))
							}
							if(step.index == 7 && step.direction == "up"){
								regions.style("fill", (d) => fundpercgdpScale(d.properties.fundpercgdp15))
							}

						}

						const devscale = d3.scaleThreshold()
							.domain([75, 90, 110, 125])
							//.range(['#e66101','#fdb863','#f7f7f7','#b2abd2','#5e3c99']);
							.range(["#2686A0","#94B9A7","#EDEAC2","#C6AA74","#A36B2B"].reverse());
							//.range(["#C75DAA","#DEA9CC","#CCCCCC","#7DC5C7","#009B9F"]);//PurpleGreen
							//.range(["#009392","#72aaa1","#f1eac8","#d98994","#d0587e"].reverse())

						const absfundScale = d3.scaleThreshold()
							.domain([100000000, 500000000, 1000000000, 5000000000])
							.range(['#edf8fb','#b3cde3','#8c96c6','#8856a7','#810f7c']);

						const percapitafundScale = d3.scaleThreshold()
							.domain([25, 50, 100, 200])
							.range(['#edf8fb','#b3cde3','#8c96c6','#8856a7','#810f7c']);

						const fundpercgdpScale = d3.scaleThreshold()
							.domain([1, 2, 3, 4])
							.range(['#edf8fb','#b3cde3','#8c96c6','#8856a7','#810f7c']);

						let geojsonNUTS2 = topojson.feature(nuts2, nuts2.objects.data);
						//TODO: remove from the topojson
						geojsonNUTS2.features = geojsonNUTS2.features.filter(function(region){
							return region.properties.CNTR_CODE != "TR" && region.properties.CNTR_CODE != "NO" && region.properties.CNTR_CODE != "CH" && region.properties.CNTR_CODE != "IS"  && region.properties.CNTR_CODE != "MK" && region.properties.CNTR_CODE != "ME";
						})
						console.log(geojsonNUTS2);
						//TODO: format numbers strings as numbers
						let geojsonNUTS0 = topojson.feature(nuts0, nuts0.objects.NUTS_RG_20M_2013_4326);

						const mapPadding = 10;
						projection.fitExtent([[mapPadding,mapPadding], [width - mapPadding, height - mapPadding]], geojsonNUTS2);

						mapOne
							.append("path")
							.datum(d3.geoGraticule())
							.attr("d", path)
							.attr("class", "graticule");

						mapOne.selectAll("path.land")
							.data(land.features)
							.enter().append("path")
							.attr("class", "land")
							.attr("d", path);

						let regions  = mapOne.selectAll("path.region")
							.data(geojsonNUTS2.features)
							.enter().append("path")
							.attr("class", "region")
							.attr("d", path)
							.attr("id", (d) => d.id)
							.style("fill", (d) => devscale(+d.properties.gdppps16));

						mapOne.selectAll("path.country")
							.data(geojsonNUTS0.features)
							.enter().append("path")
							.attr("class", "country")
							.attr("d", path)
							.attr("id", (d) => d.id)
							.style("fill", function(d){
								let regiondata = gdp.filter(function(el){
									return el.geo == d.id;
								});
								if(regiondata.length == 0){ return "#f1f1f1"; }
								else{return devscale(regiondata[0].pps);}
							});

						mapOne.selectAll("circle.capital")
							.data(capitals.features)
							.enter().append("path")
							.attr("class", "capital")
							.attr("d", path.pointRadius(2))
							.attr("id", (d) => d.name);
				
					})
				})
			})
		})
	});

}

export default { init, resize };
