/* global d3 */
import * as topojson from 'topojson';
import {select} from '../js/utils/dom.js';

function resize() {}

function init() {
	let width = select(".map1").clientWidth;
	let ratio = 0.7;
	let height = width*ratio;
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
	
	d3.json("assets/data/NUTS_RG_20M_2013_4326_LEVL_2.json", function(nuts2) {
		d3.json("assets/data/NUTS_RG_20M_2013_4326_LEVL_0.json", function(nuts0) {
			d3.json("assets/data/land.json", function(land) {
				d3.json("assets/data/capitals.json", function(capitals) {
					d3.csv('assets/data/gdp_nuts2_16.csv', function(gdp){
						gdp.forEach(function(el){
							el.pps = +el.pps;
						});

						let devscale = d3.scaleThreshold()
							.domain([75, 90, 110, 125])
							//.range(['#e66101','#fdb863','#f7f7f7','#b2abd2','#5e3c99']);
							//.range(["#2686A0","#94B9A7","#EDEAC2","#C6AA74","#A36B2B"].reverse());
							//.range(["#C75DAA","#DEA9CC","#CCCCCC","#7DC5C7","#009B9F"]);
							.range(["#009392","#72aaa1","#f1eac8","#d98994","#d0587e"].reverse())

						let geojsonNUTS2 = topojson.feature(nuts2, nuts2.objects.NUTS_RG_20M_2013_4326);
						let geojsonNUTS0 = topojson.feature(nuts0, nuts0.objects.NUTS_RG_20M_2013_4326);

						projection.fitExtent([[0,0], [width, height]], geojsonNUTS2);

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

						mapOne.selectAll("path.region")
							.data(geojsonNUTS2.features)
							.enter().append("path")
							.attr("class", "region")
							.attr("d", path)
							.attr("id", (d) => d.id)
							.style("fill", function(d){
								let regiondata = gdp.filter(function(el){
									return el.geo == d.id;
								});
								if(regiondata.length == 0){ return "#f1f1f1"; }
								else{return devscale(regiondata[0].pps);}
							});

						mapOne.selectAll("path.country")
							.data(geojsonNUTS0.features)
							.enter().append("path")
							.attr("class", "country")
							.attr("d", path)
							.attr("id", (d) => d.id)
							.style("fill", "none");

						mapOne.selectAll("circle.capital")
							.data(capitals.features)
							.enter().append("path")
							.attr("class", "capital")
							.attr("d", path.pointRadius(4))
							.attr("id", (d) => d.name);
				
					})
				})
			})
		})
	});

}

export default { init, resize };
