//* 队列：一个先进先出的数据结构

// ~js中是没有队列这个数据结构的 ，可以使用数组模拟队列
const queue = [];
//入队
queue.push(1)
queue.push(2)
//出队
const item1 = queue.shift(1)
const item2 = queue.shift(2)

//* 队列的使用场景
// # 先进先出
// # 食堂打饭
// # js异步种的任务队列
// # 计算最近的请求次数


