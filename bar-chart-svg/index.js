const data = [4, 8, 15, 16, 23, 42];

const width = 420;

let x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width]);

