const data = [4, 8, 15, 16, 23, 42];

d3.select('.chart')
  .selectAll('div')
    .data(data)
  .enter
  //   .style('width', d => `${d * 10}px`)
    // .text(d => d);