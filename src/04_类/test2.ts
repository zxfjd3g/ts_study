/* 
类的继承
*/
(function () {
  class Animal {
    run (distance: number=0) {
      console.log(`Animal run ${distance}m`)
    }
  }

  class Dog extends Animal {
    cry () {
      console.log('wang! wang!')
    }
  }

  const dog = new Dog()
  dog.cry()
  dog.run(10)
})()