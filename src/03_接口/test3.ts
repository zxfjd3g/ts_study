/* 
类类型: 实现接口
1. 一个类可以实现多个接口
2. 一个接口可以继承多个接口

*/
(function () {
  interface Alarm {
    alert(): any;
  }
  
  interface Light {
    lightOn(): void;
    lightOff(): void;
  }
  
  class Car implements Alarm {
    alert() {
        console.log('Car alert');
    }
  }
  
  /* 一个类可以实现多个接口 */
  class Car2 implements Alarm, Light {
    alert() {
      console.log('Car alert');
    }
    lightOn() {
      console.log('Car light on');
    }
    lightOff() {
      console.log('Car light off');
    }
  }
  
  /* 
  接口继承接口
  */
  interface LightableAlarm extends Alarm, Light {
  
  }
})()

