library(dplyr)
library(eurostat)
library(geojsonio)
library(sf)

##REGIONAL GDP
#Get the data from Eurostat. The database code for regional gdp is nama_10r_2gdp (see http://appsso.eurostat.ec.europa.eu/nui/show.do?dataset=nama_10r_2gdp)
gdp.nuts2 <- get_eurostat("nama_10r_2gdp")

#We are only interested in de data expressed in purchasing power standard (PPS) per inhabitant in percentage of the EU average
pps.ind <- filter(gdp.nuts2, unit == "PPS_HAB_EU")

#Regions have a 4 character ID in the geo column
pps.ind.nuts2 <- filter(pps.ind, nchar(as.character(geo)) == 4)

#Filter out the most recent data, get rid of all the unneeded columns, change column names and write csv file
pps.17 <- filter(pps.ind.nuts2, time == "2017-01-01") %>% select(geo, values)
colnames(pps.17) <- c("geo", "gdppps17")
write.csv(pps.17, file = "gdp_nuts2_17_test.csv", row.names = FALSE)

##COUNTRY GDP
#Countries have a 2 character ID in the geo column
pps.17.nuts0 <- filter(pps.ind, nchar(as.character(geo)) == 2, time == "2017-01-01") %>% select(geo, values)
colnames(pps.17.nuts0) <- c("geo", "gdppps17")
write.csv(pps.17.nuts0, file = "gdp_nuts0_17_test.csv", row.names = FALSE)

##GEODATA
#Get the NUTS2016 of NUTS level 2 regions, at scale 1:20M
#Data can also be downloaded from here: https://ec.europa.eu/eurostat/web/gisco/geodata/reference-data/administrative-units-statistical-units/nuts
regions.16 <- get_eurostat_geospatial(output_class = "sf", resolution = "20", nuts_level = "2", year = "2016")
#Join the gdp data to the geodata
regions.16.joined <- left_join(regions.16, pps.17, by = c("NUTS_ID" = "geo"))
#Filter out non-EU regions
outside <- c("AL", "CH", "LI", "ME", "IS", "NO", "TR", "MK", "RS")
regions.16.joined <- filter(regions.16.joined, !(CNTR_CODE %in% outside))
#Write the toposjon file
topojson_write(regions.16.joined, file = "nuts2_gdppps17_topo.json")

#Countries are NUTS level 0
countries.16 <- get_eurostat_geospatial(output_class = "sf", resolution = "20", nuts_level = "0", year = "2016")
#Join the gdp data to the geodata
countries.16.joined <- left_join(countries.16, pps.17.nuts0, by = c("NUTS_ID" = "geo"))
#Filter out non-EU countries
countries.16.joined <- filter(countries.16.joined, !(CNTR_CODE %in% outside))
#Write the toposjon file
topojson_write(countries.16.joined, file = "nuts0_gdppps17_topo.json")
