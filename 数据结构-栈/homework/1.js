//* 请用 ES6 的 class，封装一个 Stack 类，包括 push、pop、peek(栈顶) 方法。

class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}

const stack = new Stack();
stack.push(1);

console.log(stack.peek());
