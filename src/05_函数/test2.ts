/* 
可选参数
默认参数
剩余参数
*/
(() => {
  function buildName(firstName: string='A', lastName?: string): string {
    if (lastName) {
      return firstName + '-' + lastName
    } else {
      return firstName
    }
  }
  console.log(buildName('C', 'D'))
  console.log(buildName('C'))
  console.log(buildName())
  

  function info(x: string, ...args: string[]) {
    console.log(x, args)
  }
  info('abc', 'c', 'b', 'a')

})()