//d3.csv('ue_industry.csv', data => {
    d3.csv('https://raw.githubusercontent.com/AngelClaudio/data-sources/aba3725b6331f91a7b8bfe708e92ee71612a6ac0/csv/ue_industry.csv', data => {
   
    console.log(data);

    const xScale = d3.scaleLinear()
        .domain(d3.extent(data, d => +d.index))
        .range([1180, 20]);
    
    const yScale = d3.scaleLinear()
        .domain(d3.extent(data, d => +d.Agriculture))
        .range([580, 20]);

    d3.select('#part4')
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('r', d => 5)
        .attr('cx', d => xScale(d.index))
        .attr('cy', d => yScale(d.Agriculture));

});