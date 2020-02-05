/* 
多态
*/

(function () {
  class Animal {
    name: string
    constructor (name: string) {
      this.name = name
    }
    run (distance: number=0) {
      console.log(`${this.name} run ${distance}m`)
    }
  }

  class Snake extends Animal {
    constructor(name: string) {
      super(name) // 调用父类型构造方法
    }

    run (distance: number=5) {
      console.log('sliding...')
      super.run(distance) // 调用父类型方法
    }
  }
  class Horse extends Animal {
    constructor(name: string) {
      super(name) // 调用父类型构造方法
    }

    run (distance: number=45) {
      console.log('dashing...')
      super.run(distance) // 调用父类型方法
    }
  }

  const snake = new Snake('sn')
  snake.run()

  // 父类型变量指向子类型实现
  const tom: Animal = new Horse('ho')
  tom.run(50)

})()