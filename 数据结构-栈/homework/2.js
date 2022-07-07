// * 请用栈这个数据结构，将 100 这个十进制数字转为二进制
const fn = (value) => {
  const stack = [];
  let str = "";
  while (value > 0) {
    stack.push(value % 2);
    value = Math.floor(value / 2);
  }

  while (stack.length) {
    str += stack.pop();
  }

  return str;
};

const value = fn(100);
console.log(value);
