const data = [4, 8, 15, 16, 23, 42];

const width = 420;
const barHeight = 20;
const totalHeight = barHeight * data.length;

let x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width]);

let chart = d3.select('.chart')
    .attr('width', width)
    .attr('height', totalHeight);

let bar = chart.selectAll('g')
    .data(data)
  .enter().append('g')
    .attr('transform', (d, i) => `translate(0, ${barHeight * i})`);

bar.append('rect')
    // 注意这里 x 其实是一个函数，并且有一个参数，这个参数在这里就是 data 中的值，然后获得映射值
    .attr('width', x)
    .attr('height', barHeight - 1);

bar.append('text')
    // 设置文字的位置
    .attr('x', d => x(d) - 3)
    .attr('y', barHeight / 2)
    // 设置文字在 y 轴上的便宜
    .attr('dy', '0.35em')
    .text(d => d);

d3.tsv('../asset/data.tsv', (data) => {
  console.log(data);
})

console.log('end');

