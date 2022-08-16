let dataNumsOnly = [];
let labels = [];

fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
    .then(response => response.json())
    .then(data => {
        let dataForChart = data;
        dataForChart = dataForChart.data;
        for (let i = 0; i < dataForChart.length; i++) { //grabs data and labels.
            dataNumsOnly.push(dataForChart[i][1]);
            labels.push(dataForChart[i][0]);
        }

    const svg = d3.select('body')
    .append('svg')
    .attr('width', 1060.4)
    .attr('height', 690);

    svg.selectAll('rect')
    .data(dataNumsOnly)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('width', 3)
    .attr('height', d => d / 32)
    .attr("x", (d, i) => i * 3.5)
    .attr('transform', 'translate(50, 38.4)')
    .attr('y', d => 600 - d / 32)
    .append('title')
    .text(d => d);
    
    svg.append('text')
    .attr('transform', 'translate(420, 50)')
    .classed('info', true)
    .text('More Information: http://www.bea.gov/national/pdf/nipaguid.pdf');

    svg.append('text')
    .classed('info', true)
    .attr('transform', 'rotate(-90)')
    .attr('x', -420)
    .attr('y', 90)
    .text('Gross Domestic Product');

    const yScale = d3.scaleLinear()
    .domain([0, 20000])
    .range([600, 0]);

    svg.append('g')
    .attr('transform', 'translate(50, 38)')
    .classed('tick', true)
    .attr('id', 'y-axis')
    .call(d3.axisLeft(yScale)
    .ticks(10));

    const xScale = d3.scaleLinear()
    .domain([1947, 2015])
    .range([0, 961]);

    svg.append('g')
    .attr('transform', 'translate(50, 638)')
    .attr('id', 'x-axis')
    .classed('tick', true)
    .call(d3.axisBottom(xScale)
    .tickFormat(d3.format('d')));    
    });