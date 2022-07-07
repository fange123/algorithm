//* 栈----先进后出
//* js中没有栈，但是可以用Array数组来实现栈的所有功能
//? arr中的push(压栈)和pop(出栈)可模拟

const stack = [];
//* 入栈
stack.push(1);
stack.push(2);
stack.push(3);

//* 出栈
const item1 = stack.pop(); //3
const item2 = stack.pop(); //2

//todo:栈的使用场景
//~1.十进制转二进制
const fn = (value) => {
  const stack = [];
  let str = "";
  //* 入栈操作
  while (value > 0) {
    //把每次的余数入栈
    const remainder = value % 2;
    stack.push(remainder);
    //取完余数后，value的值就是上一次的一半向下取整
    value = Math.floor(value / 2);
  }

  //* 出栈
  while (stack.length > 0) {
    str += stack.pop();
  }
  return str;
};

fn(35); //"100011"

//~2.有效括号判断    ((()))(((()))(()
const fn2 = (str) => {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(str[i]);
    }
    if (str[i] === ")") {
      stack.pop();
    }
  }
  return stack.length;
};

fn2("((()))()))(()");

//leetcode 20
function isValid(s) {
  if (s.length % 2 === 1) {
    return false;
  }
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else {
      const t = stack[stack.length - 1];

      if (
        (t === "(" && c === ")") ||
        (t === "{" && c === "}") ||
        (t === "[" && c === "]")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

//~3.函数调用堆栈

const hello = () => {
  console.log("a");
  sing();
  console.log("b");
};

const sing = () => {
  console.log("sing");
};

hello(); //sing()函数的内容肯定先比hello执行完的早，hello先进后出
