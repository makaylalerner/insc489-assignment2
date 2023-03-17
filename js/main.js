const data = [
    {campus: "UT KNOXVILLE", enrollment: 29460, color: '#fd8105' },
    {campus: "UT CHATTANOOGA", enrollment:11590, color:'#ecaa1f'},
    {campus: "MARTIN", enrollment: 7280, color: '#0e223f'},
    {campus: "HEALTH SCIENCE CENTER", enrollment: 2815, color: '#036646'}
]

const chart = d3.select('#chart')
// Draw the bars
chart
    .selectAll()
    .data(data)
    .enter()
    .append('rect')
    .attr('x', ({}, i) => i * 110 + 100)
    .attr('y', ({ enrollment }) => 400 - enrollment / 100)
    .attr('width', 100)
    .attr('height', ({ enrollment }) => enrollment / 100)
    .attr('fill', ({ color }) => color)

// Draw the labels
chart
    .selectAll()
    .data(data)
    .enter()
    .append('text')
    .text(({ campus }) => campus)
    .attr('x', ({}, i) => i * 110 + 100)
    .attr('y', 420)
    .attr('class', 'label')

// Draw the y-axis
const yAxis = d3
    .axisLeft()
    .scale(d3.scaleLinear()
    .domain([0, 30000])
    .range([390, 0]))

chart
    .append('g')
    .attr('transform', 'translate(100, 10)')
    .call(yAxis)