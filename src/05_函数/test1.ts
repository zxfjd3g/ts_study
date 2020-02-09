/* 
定义函数
*/

(() => {
  // 函数声明
  function add(x, y) {
    return x + y
  }

  // 函数表达式
  let myAdd = function(x, y) { 
    return x + y
  }
})();

(() => {
  // 为函数定义类型
  function add(x: number, y: number): number {
    return x + y
  }
  
  let myAdd = function(x: number, y: number): number { 
    return x + y
  }

  // 完整写法
  let myAdd2: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y
  }
})()