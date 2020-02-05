/* 
readonly 修饰符
*/
(() => {
  class Person {
    readonly name: string = 'abc'
    constructor(name: string) {
      this.name = name
    }
  }
  
  let john = new Person('John')
  // john.name = 'peter' // error
  
  class Person2 {
    constructor(readonly name: string) {
    }
  }

  const p = new Person2('jack')
  console.log(p.name)
})() 