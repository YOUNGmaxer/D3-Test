const data = [4, 8, 15, 16, 23, 42];

// x 相当于是从定义域到值域的一个映射关系
let x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

// 选择表格的容器
d3.select('.chart')
  // 选择插入数据的容器
  .selectAll('div')
  // 将数据导入
    .data(data)
  // 生成缺失的元素，通过 append 来实例化元素为具体的标签
  .enter().append('div')
    .style('width', d => `${x(d)}px`)
    .text(d => d);
