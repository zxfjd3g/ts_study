/* 
类
*/

(function () {

  // 1. 基本示例
  class Greeter {
    message: string
  
    constructor (message) {
      this.message = message
    }
  
    greet (): string {
      return `hello ${this.message}`
    }
  }
  
  const greeter = new Greeter('world')
  console.log(greeter.greet())
  
})()