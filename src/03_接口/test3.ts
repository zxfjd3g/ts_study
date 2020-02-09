/* 
类类型: 实现接口
1. 一个类可以实现多个接口
2. 一个接口可以继承多个接口

*/
(function () {

  // 定义一个鸣笛的接口
  interface Alarm {
    alert(): any
  }

  // 定义灯的接口
  interface Light {
    lightOn (): void // 开灯
    lightOff (): void // 关灯
  }

  // 定义一个类实现一个接口: 必须实现接口中定义的方法
  class Car implements Alarm {
    alert () {
      console.log('Car alert()')
    }
  }

  new Car().alert()

  class Car2 implements Alarm, Light {
    alert () {
      console.log('Car2 alert()')
    }

    lightOn (): void {
      console.log('Car2 lightOn()')
    }

    lightOff (): void {
      console.log('Car2 lightOff()')
    }
  }
  const car2 = new Car2()
  car2.alert()
  car2.lightOn()
  car2.lightOff()

  // 一个接口可以继承自多个接口
  interface LightableAlarm extends Alarm, Light {

  }

  class Car3 implements LightableAlarm {
    alert () {
      console.log('Car3 alert()')
    }

    lightOn (): void {
      console.log('Car3 lightOn()')
    }

    lightOff (): void {
      console.log('Car3 lightOff()')
    }
  }

})()