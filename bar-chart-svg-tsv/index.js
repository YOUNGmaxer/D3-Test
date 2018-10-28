// 原则：在未读取到数据之前，应尽可能地初始化，这样的好处是可能能够减少一些不必要的重排。
const width = 420;
const barHeight = 20;

let x = d3.scaleLinear()
    .range([0, width]);

let chart = d3.select('.chart')
    .attr('width', width);

d3.tsv('../asset/data.tsv', d => d).then((data) => {
  // 注意这里的 max，如果传入函数，相当于先对数组进行一次 map 操作后，再取最大值
  x.domain([0, d3.max(data, d => d.value)]);

  chart.attr('height', barHeight * data.length);

  let bar = chart.selectAll('g')
    .data(data)
  .enter().append('g')
    .attr('transform', (d, i) => `translate(0, ${barHeight * i})`);

  bar.append('rect')
      // 注意这里 x 其实是一个函数，并且有一个参数，这个参数在这里就是 data 中的值，然后获得映射值
      .attr('width', d => x(d.value))
      .attr('height', barHeight - 1);

  bar.append('text')
      // 设置文字的位置
      .attr('x', d => x(d.value) - 3)
      .attr('y', barHeight / 2)
      // 设置文字在 y 轴上的便宜
      .attr('dy', '0.35em')
      .text(d => d.value);
})