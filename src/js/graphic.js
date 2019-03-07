/* global d3 */
import * as topojson from "topojson";
import {select} from "../js/utils/dom.js";
import "intersection-observer";
import scrollama from "scrollama";
import { legendColor } from "d3-svg-legend";
import { toCircle, fromCircle, toRect, fromRect } from "flubber";

//TODO: handle resize
function resize() {}

function init() {
	let width = select(".mapcontainer").clientWidth;
	let height = select(".mapcontainer").clientHeight;
	let mapOne = d3.select("svg#mapone")
		.attr("width", width)
		.attr("height", height);
	mapOne.append("svg:defs").append("svg:marker")
		.attr("id", "triangle")
		.attr("refX", 6)
		.attr("refY", 6)
		.attr("markerWidth", 30)
		.attr("markerHeight", 30)
		.attr("markerUnits","userSpaceOnUse")
		.attr("orient", "auto")
		.append("path")
		.attr("d", "M 0 0 12 6 0 12 3 6")
		.style("fill", "black");

	let projection = d3.geoAzimuthalEqualArea()
		.rotate([-10,-52,0]);

	let path = d3.geoPath()
		.projection(projection);
	
	const emojiflags = {
		"LU": "<tspan class='countryname'>Luxembourg </tspan>🇱🇺",
		"IE": "<tspan class='countryname'>Ireland </tspan>🇮🇪",
		"NL": "<tspan class='countryname'>Netherlands </tspan>🇳🇱",
		"AT": "<tspan class='countryname'>Austria </tspan>🇦🇹",
		"DE": "<tspan class='countryname'>Germany </tspan>🇩🇪",
		"DK": "<tspan class='countryname'>Denmark </tspan>🇩🇰",
		"SE": "<tspan class='countryname'>Sweden </tspan>🇸🇪",
		"BE": "<tspan class='countryname'>Belgium </tspan>🇧🇪",
		"FI": "<tspan class='countryname'>Finland </tspan>🇫🇮",
		"UK": "<tspan class='countryname'>UK </tspan>🇬🇧",
		"FR": "<tspan class='countryname'>France </tspan>🇫🇷",
		"IT": "<tspan class='countryname'>Italy </tspan>🇮🇹",
		"MT": "<tspan class='countryname'>Poland </tspan>🇲🇹",
		"ES": "<tspan class='countryname'>Spain </tspan>🇪🇸",
		"CZ": "<tspan class='countryname'>Czechia </tspan>🇨🇿",
		"CY": "<tspan class='countryname'>Cyprus </tspan>🇨🇾",
		"SI": "<tspan class='countryname'>Slovenia </tspan>🇸🇮",
		"PT": "<tspan class='countryname'>Portugal </tspan>🇵🇹",
		"SK": "<tspan class='countryname'>Slovakia </tspan>🇸🇰",
		"EE": "<tspan class='countryname'>Estonia </tspan>🇪🇪",
		"LT": "<tspan class='countryname'>Lithuania </tspan>🇱🇹",
		"EL": "<tspan class='countryname'>Greece </tspan>🇬🇷",
		"PL": "<tspan class='countryname'>Poland </tspan>🇵🇱",
		"HU": "<tspan class='countryname'>Hungary </tspan>🇭🇺",
		"LV": "<tspan class='countryname'>Latvia </tspan>🇱🇻",
		"HR": "<tspan class='countryname'>Croatia </tspan>🇭🇷",
		"RO": "<tspan class='countryname'>Romania </tspan>🇷🇴",
		"BG": "<tspan class='countryname'>Bulagaria </tspan>🇧🇬"
	}
	const capitalRegions = ["AT13","BE10","BG41","CY00","CZ01","DE30","EL30","DK01","EE00","ES30","FR10","HR04","HU10","IE02","LU00","LV00","NL32","ITI4","LT00","PL12","PT17","SI04","SK01","RO32","SE11","UKI3"];
	
	d3.json("assets/data/NUTS_RG_20M_2013_4326_LEVL_2_filtered_merged.json", function(nuts2) {
		d3.json("assets/data/NUTS_RG_20M_2016_4326_LEVL_2_filtered_merged.json", function(nuts2_16) {
			d3.json("assets/data/NUTS_RG_20M_2013_4326_LEVL_0_filtered_merged.json", function(nuts0) {
				d3.json("assets/data/land.json", function(land) {
					d3.json("assets/data/capitals.json", function(capitals) {
						d3.csv('assets/data/regiondata.csv', function(regiondata){

							regiondata.forEach(function(el){
								el.gdppps16 = +el.gdppps16;
							});

							let countrydata = regiondata.filter((d) => d.type == "country");
							countrydata.sort(function(x, y){
								return d3.descending(x.gdppps16, y.gdppps16);
							});

							/* Scrollama */
							const scroller = scrollama();
							scroller.setup({
								step: ".step"
							})
							.onStepEnter(handleStepEnter);

							//Tooltip
							let tooltip = d3.select("body").append("div")	
    							.attr("class", "tooltip")				
    							.style("opacity", 0.9);

							//TODO: add functions to steps based on data attributes, not on indices
							function handleStepEnter(step){
								d3.selectAll(".step").classed("is-active", false);
								d3.select(step.element).classed("is-active", true);

								if(step.index == 1 && step.direction == "down"){
									countries.transition().duration(1000)
										.delay((d, i) => i*100)
										.style("fill-opacity", 0)
										.style("pointer-events", "none");
									title.text("EU regions, by economic development")
									histogrammifyLegend(getRegionFrequencies("gdppps16", devscale.domain()), devscale.range());
								}
								if(step.index == 0 && step.direction == "up"){
									title.text("EU countries, by economic development")
									countries.transition().duration(1000)
										.delay((d, i) => i*100)
										.style("fill-opacity", 1);

									let countrycounts = [7, 7, 6, 4, 4];
									histogrammifyLegend(countrycounts, devscale.range())
								}

								/*if(step.index == 5 && step.direction == "down"){
									regions.style("fill", (d) => absfundScale(d.properties.totalpayments0716))

									histogrammifyLegend(getRegionFrequencies("totalpayments0716", absfundScale.domain()), 	absfundScale.range());
									d3.selectAll(".cell text.label").data(absfundScale.labels)
										.text((d) => (d));
									d3.select(".label-outside").style("opacity", 0);
								}
								if(step.index == 4 && step.direction == "up"){
									regions.style("fill", (d) => devscale(d.properties.gdppps16))
									d3.selectAll(".cell text.label").data(devscale.labels)
										.text((d) => (d));

									histogrammifyLegend(getRegionFrequencies("gdppps16", devscale.domain()), devscale.range());
									d3.select(".label-outside").style("opacity", 1);
								}*/

								/*if(step.index == 5 && step.direction == "down"){
									let poland = geojsonNUTS0.features.filter(country => country.id == "PL")[0];
									let zoomedprojection = projection.fitExtent([[mapPadding,mapPadding], [width - mapPadding, height - mapPadding]], poland);
									let zoomedGeoPath = path(zoomedprojection);
									regions.transition().duration(2000)
										.attr("d", zoomedGeoPath);
								}*/

								/*if(step.index == 6 && step.direction == "down"){
									regions.style("fill", (d) => percapitafundScale(d.properties.totalpercapita0716))

									histogrammifyLegend(getRegionFrequencies("totalpercapita0716", percapitafundScale.domain())	, absfundScale.range());
									d3.selectAll(".cell text.label").data(percapitafundScale.labels)
										.text((d) => (d));
								}
								if(step.index == 5 && step.direction == "up"){
									regions.style("fill", (d) => absfundScale(d.properties.totalpayments0716))

									histogrammifyLegend(getRegionFrequencies("totalpayments0716", absfundScale.domain()), 	absfundScale.range());
									d3.selectAll(".cell text.label").data(absfundScale.labels)
										.text((d) => (d));
								}

								if(step.index == 7 && step.direction == "down"){
									regions.style("fill", (d) => fundpercgdpScale(d.properties.fundpercgdp15))

									histogrammifyLegend(getRegionFrequencies("fundpercgdp15", fundpercgdpScale.domain()), fundpercgdpScale.range());
									d3.selectAll(".cell text.label").data(fundpercgdpScale.labels)
										.text((d) => (d));
								}
								if(step.index == 6 && step.direction == "up"){
									regions.style("fill", (d) => percapitafundScale(d.properties.totalpercapita0716))

									histogrammifyLegend(getRegionFrequencies("totalpercapita0716", percapitafundScale.domain())	, percapitafundScale.range());
									d3.selectAll(".cell text.label").data(percapitafundScale.labels)
										.text((d) => (d));
								}

								if(step.index == 8 && step.direction == "down"){
									regions.style("fill", (d) => devscale(d.properties.gdppps16))

									histogrammifyLegend(getRegionFrequencies("gdppps16", devscale.domain()), devscale.range());
									d3.selectAll(".cell text.label").data(devscale.labels)
										.text((d) => (d));
								}
								if(step.index == 7 && step.direction == "up"){
									regions.style("fill", (d) => fundpercgdpScale(d.properties.fundpercgdp15))

									histogrammifyLegend(getRegionFrequencies("fundpercgdp15", fundpercgdpScale.domain()), 	fundpercgdpScale.range());
									d3.selectAll(".cell text.label").data(fundpercgdpScale.labels)
										.text((d) => (d));
								}*/

								if(step.index == 4 && step.direction == "down"){
									//chorolegend.style("opacity", 0);
									scaleLegendCells();
									landsilhouette.transition().duration(2000).style("opacity", 0);
									othercaps.transition().duration(2000).style("opacity", 0);
									graticule.transition().duration(2000).style("opacity", 0);

									eucaps.transition()
										.delay((d,i) => 1000 + 100*i)
										.duration(2000)
										.attr("cx", (d) => devLinearScale(+d.properties.gdppps16))
										.attr("cy", (d) => countryScale(d.properties.CNTR_CODE));

									countries.transition().duration(2000)
										.delay((d, i) => i*200)
										.attrTween("d", function(d){
											return toRect(d3.select(this).attr("d"), devLinearScale(+d.properties.gdppps16) - 6, countryScale(d.properties.CNTR_CODE) - 6, 12, 12);
										});

									regions
										.on("mouseover", function(d){
											tooltip.transition()		
												.duration(200)		
												.style("opacity", 1)
												.style("background", devscale(+d.properties.gdppps16));		
											tooltip.html(d.properties.NUTS_NAME + "<br/>" + d.properties.gdppps16)
												.style("left", (d3.event.pageX + 10) + "px")		
												.style("top", (d3.event.pageY - 28) + "px");
											highlightRegions([d.properties.NUTS_ID])
										})
										.transition().duration(2000)
											.delay((d, i) => i*20)
											.attrTween("d", function(d){
												return toCircle(d3.select(this).attr("d"), devLinearScale(+d.properties.gdppps16), 	countryScale(d.properties.CNTR_CODE), 6);
										});

									let yAxis = d3.axisLeft(countryScale)
										.tickSize(-width);

									mapOne.append("g")
										.attr("transform", `translate(${margin.left}, 0)`)
										.attr("class", "y-axis")
										.call(yAxis).lower();
									d3.selectAll(".y-axis .tick text")
										.html(function(){ return emojiflags[d3.select(this).text()]})
										.style("opacity", 0).transition().delay(3000).duration(7000)
											.style("opacity", 1);
								}
								if(step.index == 3 && step.direction == "up"){

									d3.selectAll(".y-axis").transition().duration(2000)
										.style("opacity", 0);
									countries.style("opacity", 1)
										.style("fill-opacity", 0);
									//chorolegend.style("opacity", 1);
									landsilhouette.transition().duration(2000).style("opacity", 1);
									othercaps.transition().duration(2000).style("opacity", 1);
									graticule.transition().duration(2000).style("opacity", 1);
									scaleLegendCellsMap();
									eucaps.transition().delay(1000).duration(2000)
										.attr("cx", (d) => projection(d.geometry.coordinates)[0])
										.attr("cy", (d) => projection(d.geometry.coordinates)[1]);
									countries
										.transition().duration(2000)
										.delay((d, i) => i*200)
										.attrTween("d", function(d){
											return fromRect(devLinearScale(+d.properties.gdppps16), countryScale	(d.properties.CNTR_CODE), 6, 6, path(d.geometry));
										});	
									regions
										.on("mouseover", function(d){
											tooltip.transition()		
												.duration(200)		
												.style("opacity", 1)
												.style("background", devscale(+d.properties.gdppps16));		
											tooltip.html(d.properties.NUTS_NAME)
												.style("left", (d3.event.pageX + 10) + "px")		
												.style("top", (d3.event.pageY - 28) + "px");
											highlightRegions([d.properties.NUTS_ID])
										})
										.transition().duration(2000)
										.delay((d, i) => i*20)
										.attrTween("d", function(d){
											return fromCircle(devLinearScale(+d.properties.gdppps16), countryScale	(d.properties.CNTR_CODE), 6, path(d.geometry));
										});							
								}

								if(step.index == 5 && step.direction == "down"){
									let average = mapOne.insert("g", "path.region")
										.attr("id", "average")
										.attr("transform", `translate(${devLinearScale(100)}, 0)`);
									average.append("line")
										.attr("x1", 0)
										.attr("x2", 0)
										.attr("y1", margin.top)
										.attr("y2", height - 32)
										.style("stroke-width", 1)
										.style("stroke", "#000000");
									average.append('text')
										.attr("x", 0)
										.attr("y", height - 20)
										.text(100)
										.style("text-anchor", "middle")
										.style("fill", "#000000")
										.attr("class", "label-outside tk-atlas");
								}
								if(step.index == 4 && step.direction == "up"){
									d3.select("#average").remove();
								}

								if(step.index == 6 && step.direction == "down"){
									highlightRegions(["UKI3"])
									let arrow  = mapOne.append("g")
										.attr("id", "arrow")
										.attr("transform", `translate(${devLinearScale(610) - 40}, ${countryScale("UK") - 40})`)
									arrow.append("line")
            							.attr("x1", 0)
            							.attr("y1", 0)
            							.attr("x2", 30)
            							.attr("y2", 30)
            							.attr("stroke-width", 2)
            							.attr("stroke", "black")
										.attr("marker-end", "url(#triangle)");
									arrow.append("text")
										.attr("x", 0)
										.attr("y", -6)
										.text("Inner London")
										.style("text-anchor", "middle")
										.attr("class", "tk-atlas annotation");
								}
								if(step.index == 5 && step.direction == "up"){
									dehighlightRegions();
									d3.select("#arrow").remove();
								}

								if(step.index == 7 && step.direction == "down"){
									dehighlightRegions();
									devLinearScale.domain([20, 260])
									scaleLegendCells();
									d3.select("#arrow").transition().duration(2000)
										.attr("transform", `translate(${devLinearScale(610) - 40}, ${countryScale("UK") - 40})`)
									regions.transition().duration(2000)
										.attrTween("d", function(d){
										return toCircle(d3.select(this).attr("d"), devLinearScale(+d.properties.gdppps16), 	countryScale(d.properties.CNTR_CODE), 6);
										});
									countries.transition().duration(2000)
										.attrTween("d", function(d){
										return toRect(d3.select(this).attr("d"), devLinearScale(+d.properties.gdppps16) - 6, 	countryScale(d.properties.CNTR_CODE) - 6, 12, 12);
										});
									d3.select("#average")
										.transition().duration(2000)
										.attr("transform", `translate(${devLinearScale(100)}, 0)`);
									eucaps.transition().duration(2000)
										.attr("cx", (d) => devLinearScale(+d.properties.gdppps16));
								}
								if(step.index == 6 && step.direction == "up"){
									devLinearScale.domain([20, d3.max(geojsonNUTS2.features, (d) => +d.properties.gdppps16)]);
									scaleLegendCells();
									d3.select("#arrow").transition().duration(2000)
										.attr("transform", `translate(${devLinearScale(610) - 40}, ${countryScale("UK") - 40})`);
									d3.select("#average").transition().duration(2000)
										.attr("transform", `translate(${devLinearScale(100)}, 0)`);
									regions.transition().duration(2000)
										.attrTween("d", function(d){
											return toCircle(d3.select(this).attr("d"), devLinearScale(+d.properties.gdppps16), 	countryScale	(d.properties.CNTR_CODE), 6);
										});
									countries.transition().duration(2000)
										.attrTween("d", function(d){
											return toRect(d3.select(this).attr("d"), devLinearScale(+d.properties.gdppps16) - 	6, 	countryScale(d.properties.CNTR_CODE) - 6, 12, 12);
										});
									eucaps.transition().duration(2000)
										.attr("cx", (d) => devLinearScale(+d.properties.gdppps16));
								}

								//Add lines for thresholds
								if(step.index == 8 && step.direction == "down"){
									let threshold75 = mapOne.insert("g", "path.region")
										.attr("id", "threshold75")
										.attr("transform", `translate(${devLinearScale(75)}, 0)`);
									threshold75.append('line')
										.attr("x1", 0)
										.attr("x2", 0)
										.attr("y1", height - margin.bottom)
										.attr("y2", height - 32)
										.style("stroke-width", 1)
										.style("stroke", devscale(74));
									threshold75.append('text')
										.attr("x", 0)
										.attr("y", height - 20)
										.text(75)
										.style("text-anchor", "middle")
										.style("fill", devscale(74))
										.attr("class", "label-outside tk-atlas");
									threshold75.append("rect")
										.attr("x", -(devLinearScale(75) - devLinearScale(20)))
										.attr("y", legendy + legendHeight)
										.attr("width", devLinearScale(75) - devLinearScale(20))
										.attr("height", height - margin.top - margin.bottom + legendy + countryScale.step()/2)
										.style("fill", devscale(74))
										.style("opacity", 0.1);

									let threshold90 = mapOne.insert("g", "path.region")
										.attr("id", "threshold90")
										.attr("transform", `translate(${devLinearScale(90)}, 0)`);
									threshold90.append('line')
										.attr("x1", 0)
										.attr("x2", 0)
										.attr("y1", height - margin.bottom)
										.attr("y2", height - 32)
										.style("stroke-width", 1)
										.style("stroke", devscale(89));
									threshold90.append('text')
										.attr("x", 0)
										.attr("y", height - 20)
										.text(90)
										.style("text-anchor", "middle")
										.style("fill", devscale(89))
										.attr("class", "label-outside tk-atlas");
									threshold90.append("rect")
										.attr("x", -(devLinearScale(90) - devLinearScale(75)))
										.attr("y", legendy + legendHeight)
										.attr("width", devLinearScale(90) - devLinearScale(75))
										.attr("height", height - margin.top - margin.bottom + legendy + countryScale.step()/2)
										.style("fill", devscale(89))
										.style("opacity", 0.1);
									mapOne.insert("rect", "path.region")
										.attr("id", "threshold100")
										.attr("x", devLinearScale(100) - (devLinearScale(100) - devLinearScale(90)))
										.attr("y", legendy + legendHeight)
										.attr("height", height - margin.top - margin.bottom)
										.attr("width", devLinearScale(100) - devLinearScale(90))
										.attr("height", height - margin.top - margin.bottom + legendy + countryScale.step()/2)
										.style("fill", devscale(99))
										.style("opacity", 0.1);
									mapOne.insert("rect", "path.region")
										.attr("id", "threshold110")
										.attr("x", devLinearScale(110) - (devLinearScale(110) - devLinearScale(100)))
										.attr("y", legendy + legendHeight)
										.attr("height", height - margin.top - margin.bottom)
										.attr("width", devLinearScale(110) - devLinearScale(100))
										.attr("height", height - margin.top - margin.bottom + legendy + countryScale.step()/2)
										.style("fill", devscale(109))
										.style("opacity", 0.1);
									mapOne.insert("rect", "path.region")
										.attr("id", "threshold125")
										.attr("x", devLinearScale(125) - (devLinearScale(125) - devLinearScale(110)))
										.attr("y", legendy + legendHeight)
										.attr("height", height - margin.top - margin.bottom)
										.attr("width", devLinearScale(125) - devLinearScale(110))
										.attr("height", height - margin.top - margin.bottom + legendy + countryScale.step()/2)
										.style("fill", devscale(124))
										.style("opacity", 0.1);
									mapOne.insert("rect", "path.region")
										.attr("id", "threshold600")
										.attr("x", devLinearScale(600) - (devLinearScale(600) - devLinearScale(125)))
										.attr("y", legendy + legendHeight)
										.attr("height", height - margin.top - margin.bottom)
										.attr("width", devLinearScale(600) - devLinearScale(125))
										.attr("height", height - margin.top - margin.bottom + legendy + countryScale.step()/2)
										.style("fill", devscale(126))
										.style("opacity", 0.2);

								}
								if(step.index == 7 && step.direction == "up"){
									d3.select("#threshold75").remove();
									d3.select("#threshold90").remove();
									d3.select("#threshold100").remove();
									d3.select("#threshold110").remove();
									d3.select("#threshold125").remove();
									d3.select("#threshold600").remove();
								}

								if(step.index == 9 && step.direction == "down"){
									highlightRegions(["LT00", "HU10", "PL12"]);
									let arrowLithuania  = mapOne.append("g")
										.attr("class", "region-arrow")
										.attr("transform", `translate(${devLinearScale(75) - 60}, ${countryScale("LT")})`)
									arrowLithuania.append("line")
            							.attr("x1", 0)
            							.attr("y1", 0)
            							.attr("x2", 40)
            							.attr("y2", 0)
            							.attr("stroke-width", 2)
            							.attr("stroke", "black")
										.attr("marker-end", "url(#triangle)");
									arrowLithuania.append("text")
										.attr("x", 0)
										.attr("y", -6)
										.text("Lithuania")
										.style("text-anchor", "middle")
										.attr("class", "tk-atlas annotation");
										
									let arrowBudapest  = mapOne.append("g")
										.attr("class", "region-arrow")
										.attr("transform", `translate(${devLinearScale(105) + 5}, ${countryScale("HU") + 5})`)
									arrowBudapest.append("line")
            							.attr("x1", 40)
            							.attr("y1", 20)
            							.attr("x2", 0)
            							.attr("y2", 0)
            							.attr("stroke-width", 2)
            							.attr("stroke", "black")
										.attr("marker-end", "url(#triangle)");
									arrowBudapest.append("text")
										.attr("x", 0)
										.attr("y", 35)
										.text("Budapest")
										.style("text-anchor", "middle")
										.attr("class", "tk-atlas annotation");
										
									let arrowWarsaw  = mapOne.append("g")
										.attr("class", "region-arrow")
										.attr("transform", `translate(${devLinearScale(114)}, ${countryScale("PL") - 24})`)
									arrowWarsaw.append("line")
            							.attr("x1", 40)
            							.attr("y1", 0)
            							.attr("x2", 0)
            							.attr("y2", 20)
            							.attr("stroke-width", 2)
            							.attr("stroke", "black")
										.attr("marker-end", "url(#triangle)");
									arrowWarsaw.append("text")
										.attr("x", 0)
										.attr("y", -6)
										.text("Warsaw")
										.style("text-anchor", "middle")
										.attr("class", "tk-atlas annotation");
								}
								if(step.index == 8 && step.direction == "up"){
									dehighlightRegions();
									d3.selectAll(".region-arrow").remove();
								}
							}

							const devscale = d3.scaleThreshold()
								.domain([75, 90, 100, 110, 125])
								.range(["#009B9E","#42B7B9","#A7D3D4","#E4C1D9","#D691C1","#C75DAB"].reverse());
							devscale.labels = ["less developed", "", "", "", "", "more developed"];

							const absfundScale = d3.scaleThreshold()
								.domain([500000000, 1000000000, 2000000000, 3000000000, 5000000000])
								.range(["#5B3794","#8F4D9F","#B76AA8","#D78CB1","#F1B1BE","#F8DCD9"].reverse());//RdPu
							absfundScale.labels = ["<50m €", "50-100m", "100-200m", "200-300m", "300-500m", ">500m €"];

							const percapitafundScale = d3.scaleThreshold()
								.domain([25, 50, 75, 125, 200])
								.range(["#5B3794","#8F4D9F","#B76AA8","#D78CB1","#F1B1BE","#F8DCD9"].reverse());//RdPu
							percapitafundScale.labels = ["<25 €/cap/y", "25-50", "50-75", "75-125", "125-200", ">200 €/cap/y"];

							const fundpercgdpScale = d3.scaleThreshold()
								.domain([1, 2, 3, 4, 5])
								.range(["#5B3794","#8F4D9F","#B76AA8","#D78CB1","#F1B1BE","#F8DCD9"].reverse());//RdPu
							fundpercgdpScale.labels = ["<1% gdp", "1-2", "2-3", "3-4", "4-5", ">5% gdp"];

							let geojsonNUTS2 = topojson.feature(nuts2, nuts2.objects.data);
							let geojsonNUTS2_16 = topojson.feature(nuts2_16, nuts2_16.objects.data);

							let geojsonNUTS0 = topojson.feature(nuts0, nuts0.objects.data);
							geojsonNUTS0.features = geojsonNUTS0.features.sort(function(x, y){
								return d3.descending(+x.properties.gdppps16, +y.properties.gdppps16)
							})

							let countrycodes = geojsonNUTS0.features.map((country) => country.properties.CNTR_CODE);

							const margin = {"top": 70, "left": 120, "bottom": 50, "right": 20};
							const mapPadding = 10;

							//Scales for the dotplot
							const countryScale = d3.scalePoint()
								.domain(countrycodes)
								.range([margin.top, height - margin.bottom])
							const devLinearScale = d3.scaleLinear()
								.domain([20, d3.max(geojsonNUTS2.features, (d) => +d.properties.gdppps16)])
								.range([margin.left, width - margin.right])

							//Set up map
							projection.fitExtent([[mapPadding, mapPadding + 25], [width - mapPadding, height - mapPadding]], 	geojsonNUTS2);

							let graticule  = mapOne.append("path")
								.datum(d3.geoGraticule())
								.attr("d", path)
								.attr("class", "graticule");

							let landsilhouette = mapOne.selectAll("path.land")
								.data(land.features)
								.enter().append("path")
								.attr("class", "land")
								.attr("d", path);

							//Sort regions based on country gdppps16, so they animate in nice sequence
							geojsonNUTS2.features = geojsonNUTS2.features.sort(function(x, y){
								return d3.ascending(countryScale(x.properties.CNTR_CODE), countryScale(y.properties.CNTR_CODE))
							});

							let regions = mapOne.selectAll("path.region")
								.data(geojsonNUTS2.features)
								.enter().append("path")
								.attr("class", (d) => `region ${d.properties.CNTR_CODE}`)
								.attr("d", path)
								.attr("id", (d) => d.id)
								.style("fill", (d) => devscale(+d.properties.gdppps16))
								.on("mouseover", function(d){
									tooltip.transition()		
										.duration(200)		
										.style("opacity", 1)
										.style("background", devscale(+d.properties.gdppps16));		
									tooltip.html(d.properties.NUTS_NAME)
										.style("left", (d3.event.pageX + 10) + "px")		
										.style("top", (d3.event.pageY - 28) + "px");
									highlightRegions([d.properties.NUTS_ID])
								})
								.on("mouseout", function(d){
									tooltip.transition()		
										.duration(200)		
										.style("opacity", 0);
									dehighlightRegions();
								});

							let countries = mapOne.selectAll("path.country")
								.data(geojsonNUTS0.features)
								.enter().append("path")
								.attr("class", "country")
								.attr("d", path)
								.attr("id", (d) => d.id)
								.style("fill", (d) => devscale(d.properties.gdppps16));

							//TODO: some country labelling? https://bl.ocks.org/veltman/403f95aee728d4a043b142c52c113f82
							let eucapsFeatures = capitals.features.filter((cap) => cap.properties.NUTS_ID);
							let othercapsFeatures = capitals.features.filter((cap) => !cap.properties.NUTS_ID);
							
							let othercaps = mapOne.selectAll("circle.capital")
								.data(othercapsFeatures)
								.enter().append("path")
								.attr("class", "capital")
								.attr("d", path.pointRadius(3))
								.style("filter", "url(#capitalshadow)")
								.attr("id", (d) => d.name);

							let eucaps = mapOne.selectAll("circle.eucapital")
								.data(eucapsFeatures)
								.enter().append("circle")
								.attr("class", "capital eucapital")
								.attr("r", 3)
								.attr("cx", (d) => projection(d.geometry.coordinates)[0])
								.attr("cy", (d) => projection(d.geometry.coordinates)[1])
								.style("filter", "url(#capitalshadow)")
								.attr("id", (d) => d.name);

							//Legend
							/*let chorolegend = mapOne.append("g")
							  .attr("class", "chorolegend tk-atlas")
							  .attr("transform", `translate(${width - 170}, 150)`);

							let legend = legendColor()
								.orient("horizontal")
								.labelWrap(50)
								//.shapePadding()
								.shapeWidth(20)
								.labels(["Less developed", "", "", "", "", "More developed"])
								.scale(devscale);

							mapOne.select(".chorolegend")
								.call(legend);*/

							let countrycounts = [7, 7, 3, 3, 4, 4];
							histogrammifyLegend(countrycounts, devscale.range());

							//Alternative legend
							const legendy = 30;
							const legendHeight = 10;
							let chorolegendtop = mapOne.append("g")
								.attr("class", "toplegend tk-atlas")
								.attr("transform", `translate(${margin.left},${legendy})`);
							let legendtop = legendColor()
								.orient("horizontal")
								.shapeWidth((width - margin.left)/6)
								.labels(["less developed", "", "", "", "", "more developed"])
								.labelOffset(10)
								.shapePadding(0)
								.shapeHeight(legendHeight)
								.scale(devscale);
							mapOne.select(".toplegend")
								.call(legendtop);

							mapOne.append("text")
								.attr("x", (width - margin.left)/2 + margin.left)
								.attr("y", 58)
								.text("average")
								.attr("class", "tk-atlas label-outside")
								.attr("id", "average-label")
								.style("text-anchor", "middle");

							let title = mapOne.append("text")
								.attr("x", margin.left)
								.attr("y", 20)
								.attr("class", "tk-atlas")
								.attr("id", "title")
								.text("EU countries, by economic development")

							/* Little maps */
							let smallmapWidth = 400;
							let smallmapHeight = 400;
							let smallmapPadding = 40;

							function makeSmallmap(elementid, countryid, year, color){
								let map = d3.select("#" + elementid)
									.attr("width", smallmapWidth)
									.attr("height", smallmapHeight);

								let country = geojsonNUTS0.features.filter(country => country.id == countryid)[0];

								let smallprojection = d3.geoAzimuthalEqualArea()
									.rotate([-10,-52,0])
									.fitExtent([[smallmapPadding,smallmapPadding], [smallmapWidth - smallmapPadding, smallmapHeight - smallmapPadding]], country);;
						
								let smallGeoPath = d3.geoPath()
									.projection(smallprojection);

								map.append("path")
									.datum(d3.geoGraticule())
									.attr("d", smallGeoPath)
									.attr("class", "graticule");

								map.selectAll("path.land")
									.data(land.features)
									.enter().append("path")
									.attr("class", "land")
									.attr("d", smallGeoPath);

								let features;
								if(year == 2013){
									features = geojsonNUTS2.features;
								}
								if(year == 2016){
									features = geojsonNUTS2_16.features;
									
									features.forEach(function(region){
										//Some regions were recoded (and have no merged data)
										if(region.id == "PL71"){
											region.id = "PL11";
											region.properties.NUTS_ID = "PL11";
											region.properties.gdppps16 = "64";
										}
										if(region.id == "PL72"){
											region.id = "PL33";
											region.properties.NUTS_ID = "PL33";
											region.properties.gdppps16 = "49";
										}
										if(region.id == "PL81"){
											region.id = "P31";
											region.properties.NUTS_ID = "PL31";
											region.properties.gdppps16 = "47";
										}
										if(region.id == "PL82"){
											region.id = "P32";
											region.properties.NUTS_ID = "PL32";
											region.properties.gdppps16 = "48";
										}
										if(region.id == "PL84"){
											region.id = "P34";
											region.properties.NUTS_ID = "PL34";
											region.properties.gdppps16 = "48";
										}
										//These are the regions that have split. No stats yet, so need to calculate from underlying NUTS3 regions
										//This one is correct
										if(region.id == "LT01"){
											region.properties.gdppps16 = "109";
										}
										//To calculate
										if(region.id == "LT02"){
											region.properties.gdppps16 = "64";
										}
										//This one is correct
										if(region.id == "HU11"){
											region.properties.gdppps16 = "136";
										}
										//To calculate
										if(region.id == "HU12"){
											region.properties.gdppps16 = "59";
										}
										//To calculate
										if(region.id == "PL91"){
											region.properties.gdppps16 = "124";
										}
										//To calculate
										if(region.id == "PL92"){
											region.properties.gdppps16 = "59";
										}
									})
								}

								map.selectAll("path.region")
									.data(features)
									.enter().append("path")
									.attr("class", (d) => `region ${d.properties.CNTR_CODE}`)
									.attr("d", smallGeoPath)
									.attr("id", (d) => d.id)
									.style("fill", (d) => devscale(+d.properties.gdppps16));

								map.selectAll("path.country")
									.data(geojsonNUTS0.features)
									.enter().append("path")
									.attr("class", "country")
									.attr("d", smallGeoPath)
									.attr("id", (d) => d.id)
									.style("fill", "none");
								map.selectAll("circle.capital")
									.data(capitals.features)
									.enter().append("path")
									.attr("class", "capital")
									.attr("d", smallGeoPath.pointRadius(3))
									.style("filter", "url(#capitalshadow)")
									.attr("id", (d) => d.name);

								highlightCountryRegions(countryid, elementid);
							}

							makeSmallmap("lithuania13", "LT", 2013);
							makeSmallmap("lithuania16", "LT", 2016);
							//makeSmallmap("hungary13", "HU", 2013);
							//makeSmallmap("hungary16", "HU", 2016);
							makeSmallmap("poland13", "PL", 2013);
							makeSmallmap("poland16", "PL", 2016);


							/* Helper functions */
							function histogrammifyLegend(histovalues, colors){
								/*const legendhistoheight = 100;
								let histoScale = d3.scaleLinear()
									.domain([0, d3.max(histovalues)])
									.range([0, legendhistoheight])*/
								d3.selectAll(".cell rect").data(histovalues)
									.transition().duration(1000)
									.style("fill", (d, i) => colors[i]);
									//.attr("height", (d) => histoScale(d))
									//.attr("transform", (d) => `translate(0, -${histoScale(d) - 14})`);
							}

							function scaleLegendCells(){
								const breaks = [devLinearScale.domain()[0]].concat(devscale.domain());
								d3.selectAll(".cell").data(breaks)
									.transition().duration(2000)
									.attr("transform", (d) => `translate(${devLinearScale(d) - margin.left},0)`);
								d3.selectAll(".cell rect")
									.attr("width", (d, i) => {
										if(i < breaks.lenght){
											return devLinearScale(breaks[i + 1]) - devLinearScale(d);
										}
										else{return width - devLinearScale(d);}
									})
								d3.selectAll(".cell text").transition().duration(2000).style("opacity", 0);
								d3.select("#average-label").transition().duration(2000)
									.attr("x", devLinearScale(100))
							}

							function scaleLegendCellsMap(){
								d3.selectAll(".cell")
									.transition().duration(2000)
									.attr("transform", (d,i) => `translate(${i * (width - margin.left)/6},0)`);
								d3.selectAll(".cell rect")
									.transition().duration(2000)
									.attr("width", (width - margin.left)/6)
								d3.selectAll(".cell text").transition().duration(2000).style("opacity", 1);
								d3.select("#average-label").transition().duration(2000)
									.attr("x", (width - margin.left)/2 + margin.left)
							}


							function getRegionFrequencies(property, thresholds){
								let histo = d3.histogram()
									.value((d) => +d.properties[property])
									.thresholds(thresholds);
								return histo(geojsonNUTS2.features).map((bin) => bin.length);
							}

							//Country highlighting
							function highlightCountryRegions(countrycode, mapid){
									d3.selectAll(`#${mapid} .region:not(.${countrycode})`)
										.style("opacity", 0.1);
									d3.select(`#${mapid} .country#${countrycode}`)
										.style("filter", "url(#shadow)");
							}

							function dehighlightCountryRegions(countrycode, mapid){
								d3.selectAll(`#${mapid} .region`)
									.style("opacity", 1);
								d3.select(`#${mapid} .country#${countrycode}`)
									.style("filter", "none");
							}
							d3.selectAll(".highlight.country")
								.on("mouseover", function(){
									let countryCode = d3.select(this).attr("id");
									highlightCountryRegions(countryCode, "mapone");
								}).on("mouseout", function(){
									let countryCode = d3.select(this).attr("id");
									dehighlightCountryRegions(countryCode, "mapone");
								});
							
							//Region highlighting
							function getRegionsByThresholds(thlow, thhigh, measure){
								return geojsonNUTS2.features.filter(function(region){
									return region.properties[measure] < +thhigh && region.properties[measure] >= +thlow;
								}).map((region) => region.properties.NUTS_ID);
							}

							function highlightRegions(regioncodes){
								d3.selectAll(".region")
									.style("opacity", 0.1)
								regioncodes.forEach(function(region){
									d3.select(`.region#` + region)
										.style("opacity", 1);
										//.style("filter", "url(#shadow)")
								});
							}

							function dehighlightRegions(){
								d3.selectAll(".region")
									.style("opacity", 1)
									.style("filter", "none");							
							}

							d3.selectAll(".highlight.region")
								.on("mouseover", function(){
									let regionCode = d3.select(this).attr("id");
									highlightRegions([regionCode]);
								}).on("mouseout", function(){
									dehighlightRegions();
								});
							
							d3.selectAll(".textlegend")
								.on("mouseover", function(){
									let thHigh = d3.select(this).attr("data-th-high");
									let thLow = d3.select(this).attr("data-th-low");
									let measure = d3.select(this).attr("data-measure");
									let regionsToHighlight = getRegionsByThresholds(thLow, thHigh, measure);
									highlightRegions(regionsToHighlight);
								}).on("mouseout", function(){
									dehighlightRegions();
								});	
							
							//Highlight regions containing the country capital
							d3.selectAll(".highlight.capital-regions")
								.on("mouseover", function(){
									highlightRegions(capitalRegions);
								}).on("mouseout", function(){
									dehighlightRegions();
								});
						})
					})
				})
			})
		})
	});
}

export default { init, resize };