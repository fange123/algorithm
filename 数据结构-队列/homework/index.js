//* 请用 ES6 的 class，封装一个 Queue 类，包括 push、shift、peek 方法。

class Queue {
  constructor() {
    this.queue = []
  }
  push(t){
    this.queue.push(t)
    return this.queue.length
  }

  shift(){
    return this.queue.shift()
  }

  peek(){
    return this.queue[0]
  }
}

const queue = new Queue()
queue.push(1)
queue.push(2)
queue.push(3)
console.log(queue.queue)
queue.shift()
console.log(queue.queue)
console.log(queue.peek())

