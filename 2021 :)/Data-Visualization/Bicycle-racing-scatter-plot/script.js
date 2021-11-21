/*
The research data was not done by me. 
Credit goes to freeCodeCamp. 
The reason why I put it in a .json file is because I wanted to reorganize the dates. 
It is easier to read and plan.
Here is the link: https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json
*/

fetch('/data.json')
    .then(response => response.json())
    .then (data => {
        let j = -1;
        let count = -1;
        let time = []; //mins for the chart
        let minutes = [];
        let finalTime = [];
        for (let i = 0; i < data.length; i++) {
            minutes.push(data[i].Time)
            minutes.forEach(min => finalTime.push(parseFloat(min.substring(0, 2)) 
            + parseFloat('.' + min.substring(3, 5))));
                time.push([data[i].Year, finalTime[i]]);
        }

        const svg = d3.select('body')
        .append('svg')
        .attr('width', 800)
        .attr('id', 'tooltop')
        .attr('height', 550);

        svg.append('text')
        .attr('transform', 'rotate(-90)')
        .text('Time In Minutes')
        .attr('x', -385)
        .attr('id', 'span')
        .attr('y', 40);

        svg.append('text')
        .text('No doping allegations')
        .attr('x', 470)
        .attr('id', 'p')
        .attr('y', 40);
        
        svg.append('text')
        .text('With doping allegations')
        .attr('x', 470)
        .attr('id', 'p')
        .attr('y', 80);

        svg.append('rect')
        .attr('width', 20)
        .attr('height', 20)
        .attr('x', 750)
        .attr('y', 64)
        .attr('fill', '#3944bc')
        .attr('opacity', 0.7);

        svg.append('rect')
        .attr('width', 20)
        .attr('height', 20)
        .attr('x', 750)
        .attr('y', 23)
        .attr('fill', '#44bc39')
        .attr('opacity', 0.7);

        svg.selectAll('circle')
        .data(time)
        .enter()
        .append('circle')
        .attr('class', () => {
            while (j < data.length) {
                j++;
                if (data[j].Doping != '') {
                    return 'doped';
                } else {
                    return 'dot';
                }
            }    
        })
        .attr('cx', (d, i) => (i * 9.5 + 120))
        .attr('cy', (d, i) => (5400 - (d[1] * 135)).toFixed(2))
        .attr('r', 9)
        .append('title')
        .text(d => {
            count++;
            return `Name: ${data[count].Name}\nYear: ${data[count].Year}\nTime: ${d[1]}\n${data[count].Doping}`;
        });

        const yScale = d3.scaleLinear()
        .domain([2220000, 2400000])
        .range([470, 0]);

        svg.append('g')
        .attr('id', 'y-axis')
        .attr('transform', 'translate(100, 30)')
        .call(d3.axisLeft(yScale)
        .tickFormat(d3.timeFormat('%M:%S'))
        .ticks(2));

        const xScale = d3.scaleLinear()
        .domain([1990, 2018])
        .range([0, 400]);

        svg.append('g') 
        .attr('id', 'x-axis')
        .attr('transform', 'translate(100, 500)')
        .call(d3.axisBottom(xScale)
        .tickFormat(d3.format(''))
        .ticks(7));
    });
