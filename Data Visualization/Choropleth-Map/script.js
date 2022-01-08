//Did this project with help from https://www.youtube.com/watch?v=ha1toFtBfF8&t=1159s

let countyData; //Varaibles to store data.
let educationData;

/*
Colors:
#2d6484
#4c7c9b
#6996b3
#86b0cc
#a3cbe5
#c1e7ff
Increments:
66%
57%
48%
30%
21%
12%
*/

//A FIPS county code is how the US county codes are catgorized.

d3.json('https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json').then(
    (data, error) => { //Returns a promise and converts the JSON file to JS objects.
//Converts to GeoJSON data. Grabs the objects, then counties, and then feature.
            countyData = topojson.feature(data, data.objects.counties).features;
            d3.json('https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json').then(
                (data, error) => { //Returns a promise and converts the JSON file to JS objects.
                        //Drawing the map.
                        educationData = data;
                        let canvas = d3.select('#canvas');
                        let tooltip = d3.select('#tooltip');
                        canvas.selectAll('path')
                        .data(countyData)
                        .enter()
                        .append('path') //Path has an attribute of d. d is the lines that draw the map.
                        .classed('county', true)
                        .attr('d', d3.geoPath())
                        .attr('fill', item => {
                            const id = item.id; //Matches the ID with the fips.
                            let county = educationData.find(itemEdu => {
                                return itemEdu.fips == id;
                            });
                            const countyStats = county.bachelorsOrHigher;
                            
                            if (countyStats <= 12) {//Setting the color for each county based on their value.
                                return '#c1e7ff';
                            } else if (countyStats <= 21) {
                                return '#a3cbe5';
                            } else if (countyStats <= 30) {
                                return '#86b0cc';
                            } else if (countyStats <= 48) {
                                return '#6996b3';
                            } else if (countyStats <= 57) {
                                return '#4c7c9b';
                            } else if (countyStats <= 66) {
                                return '#2d6484';
                            }
                        })
                        .attr('data-flips', item => { //For passing freeCodeCamp test cases.
                            return item.id;
                        })
                        .attr('data-education', item => {
                            const id = item.id;
                            let county = educationData.find(itemEdu => {
                                return itemEdu.fips == id;
                            });
                            const countyStats = county.bachelorsOrHigher;
                            return countyStats;
                        });
                        
                        const keyData = [12, 21, 30, 48, 57, 66];

                        const key = d3.scaleLinear() 
                        .domain([3, 66])
                        .range([0, 199]);

                        canvas.append('g')
                        .attr('transform', 'translate(601, 57)')
                        .attr('id', 'key')
                        .call(d3.axisBottom(key)
                        .ticks(5)
                        .tickFormat(d3.format('')));

                        canvas.selectAll('rect') //key
                        .data(keyData)
                        .enter()
                        .append('rect')
                        .attr('transform', 'translate(600.5, 39.5)')
                        .attr('width', 33.4)
                        .attr('height', 17)
                        .attr('x', (d, i) => i * 33.4)
                        .attr('fill', (d) => {
                            switch(d) {
                                case 12:
                                    return '#c1e7ff';
                                case 21:
                                    return '#a3cbe5';
                                case 30:
                                    return '#86b0cc';
                                case 48:
                                    return '#6996b3';
                                case 57:
                                    return '#4c7c9b';
                                case 66:
                                    return '#2d6484';
                            }   
                        });
                    
                    

    }
)
    }
)


