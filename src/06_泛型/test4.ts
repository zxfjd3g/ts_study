/* 
泛型约束
*/

(() => {
  interface Lengthwise {
    length: number;
  }

  // 没有泛型约束
  function fn <T>(x: T): void {
    // console.log(x.length)  // error
  }

  // 指定泛型约束
  function fn2 <T extends Lengthwise>(x: T): void {
    console.log(x.length)
  }

  fn2('abc')
  // fn2(123) // error
  
})()