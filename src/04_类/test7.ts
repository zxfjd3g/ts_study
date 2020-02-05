/* 
静态属性, 是类对象的属性
非静态属性, 是类的实例对象的属性
*/
(()=>{
  class Person {
    name1: string = 'A'
    static name2: string = 'B'
  }

  console.log(Person.name2)
  console.log(new Person().name1)

})()