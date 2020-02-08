/* 测试1: 类型注解 */
(function () {

  function greeter(person: string) {
    return 'hello ' + person
  }
  
  const user = 'tom'
  console.log(greeter(name))
  
  // const _user = [1, 2, 3]
  // console.log(greeter(_user)) // 类型“number[]”的参数不能赋给类型“string”的参数
})();

/* 测试2: 接口 */
(function () {
  interface Person {
    firstName: string
    lastName: string
  }
  
  function greeter(person: Person) {
    return `Hello, ${person.firstName}-${person.lastName}`
  }
  
  const user = {
    firstName: 'A',
    lastName: 'B'
  }
  
  console.log(greeter(user))
})();

/* 
测试3: 类
*/
(function () {
  class User {
    firstName: string
    lastName: string
    fullName: string
  
    constructor(firstName:string, lastName:string) {
      this.firstName = firstName
      this.lastName = lastName
      this.fullName = firstName + '-' + lastName
    }
  }
  
  interface Person {
    firstName: string
    lastName: string
  }
  
  
  function greeter (person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName
  }
  
  let user = new User('Yee', 'Huang')
  
  console.log(greeter(user))
})()

