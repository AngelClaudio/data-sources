//d3.csv('ue_industry.csv', data => {
d3.csv('https://raw.githubusercontent.com/AngelClaudio/data-sources/aba3725b6331f91a7b8bfe708e92ee71612a6ac0/csv/ue_industry.csv', data => {
   
    // Define your scales and generator here.
    // Range is size of image
    // Domain is min maxes
    let xScale = d3.scaleLinear().domain(d3.extent(data, d => +d.index)).range([20, 1180]);
    let yScale = d3.scaleLinear().domain(d3.extent(data, d => +d.Agriculture)).range([580, 20]); // flip the y

    //d3.extent(data, d => +d.Agriculture) //referencing agriculture put in Y scale
    let lineAnswer = d3.line()
        .x(d => xScale(d.index))
        .y(d => yScale(d.Agriculture));

    d3.select('#answer1')
        .append('path')
        .attr('d', lineAnswer(data))
        .attr('stroke','#2e2928');  //color of line
        // append more elements here

});
