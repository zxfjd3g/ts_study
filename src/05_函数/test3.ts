/* 
函数重载: 函数名相同, 而形参不同的多个函数
*/
/* 
需求: 我们有一个add函数，它可以接收2个string类型的参数进行拼接，也可以接收2个number类型的参数进行相加 */

(() => {
  // 重载函数声明
  function add (x: string, y: string): string
  function add (x: number, y: number): number

  // 定义函数实现
  function add(x: string | number, y: string | number): string | number {
    // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 x + y
    if (typeof x === 'string' && typeof y === 'string') {
      return x + y
    } else if (typeof x === 'number' && typeof y === 'number') {
      return x + y
    }
  }

  console.log(add(1, 2))
  console.log(add('a', 'b'))
  // console.log(add(1, 'a'))
})()