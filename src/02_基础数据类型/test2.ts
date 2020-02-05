/* 
联合类型（Union Types）表示取值可以为多种类型中的一种。
*/
(() => {
  let c1: number | string = 3
  c1 = 'abc'
  // c1 = true

  function toString2(x: number | string) : string {
    return x.toString()
  }

  /* 
  function getLength(x: number | string) {
    if (x.length) { // error
      return x.length
    } else {
      return x.toString().length
    }
  } */
})()