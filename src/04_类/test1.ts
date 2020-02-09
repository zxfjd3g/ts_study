/* 
类的基本定义与使用
*/

(function () {

  class Greeter {
    // 声明属性
    message: string

    // 构造方法
    constructor (message: string) {
      this.message = message
    }

    // 一般方法
    greet (): string {
      return 'Hello ' + this.message
    }
  }

  // 创建类的实例
  const greeter = new Greeter('world')
  // 调用实例的方法
  console.log(greeter.greet())
  
})()