/* 
访问修饰符: 用来描述类内部的属性/方法的可访问性
  public: 默认值, 公开的外部也可以访问
  private: 只能类内部可以访问
  protected: 类内部和子类可以访问
*/

(function () {
  class Animal {
    public name: string
    public constructor (name) {
      this.name = name
    }
    public run (distance: number=0) {
      console.log(`${this.name} run ${distance}m`)
    }
  }

  class Snake extends Animal {
    private age: number=12 // 只能在当前类内部可见, 不能在类外部可见(访问)
    protected sex: string = '女'

    constructor(name) {
      super(name) // 调用父类型构造方法
    }

    run (distance: number=5) {
      console.log('sliding... ', this.age)
      super.run(distance) // 调用父类型方法
    }
  }

  class RedSnake extends Snake {
    constructor(name) {
      super(name)
    }

    run (distance: number=45) {
      console.log('RedSnake dashing...')
      console.log(this.sex) // 可以访问父类型中protected属性
      // console.log(this.age) // 不可以访问父类型中private属性
      super.run(distance) // 调用父类型方法
    }
  }

  // console.log(new Snake('xxx').age) // error 属性“age”为私有属性，只能在类“Snake”中访问。

})()