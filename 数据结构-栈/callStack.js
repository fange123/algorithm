const fn1 = () => {
  fn2();
  console.log("fn1");
};

const fn2 = () => {
  fn3();
  console.log("fn2");
};

const fn3 = () => {
  console.log("fn3");
};

fn1(); //fn3 fn2 fn1

// * 最后调用的最先执行完
