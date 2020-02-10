# 5. 泛型

指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定具体类型的一种特性。

## 引入
下面创建一个函数, 实现功能: 根据指定的数量 `count` 和数据 `value` , 创建一个包含 `count` 个 `value` 的数组
不用泛型的话，这个函数可能是下面这样：

```typescript
function createArray(value: any, count: number): any[] {
  const arr: any[] = []
  for (let index = 0; index < count; index++) {
    arr.push(value)
  }
  return arr
}

const arr1 = createArray(11, 3)
const arr2 = createArray('aa', 3)
console.log(arr1[0].toFixed(), arr2[0].split(''))
```

## 使用函数泛型

```typescript
function createArray2 <T> (value: T, count: number) {
  const arr: Array<T> = []
  for (let index = 0; index < count; index++) {
    arr.push(value)
  }
  return arr
}
const arr3 = createArray2<number>(11, 3)
console.log(arr3[0].toFixed())
// console.log(arr3[0].split('')) // error
const arr4 = createArray2<string>('aa', 3)
console.log(arr4[0].split(''))
// console.log(arr4[0].toFixed()) // error
```

## 多个泛型参数的函数

一个函数可以定义多个泛型参数

```typescript
function swap <K, V> (a: K, b: V): [K, V] {
  return [a, b]
}
const result = swap<string, number>('abc', 123)
console.log(result[0].length, result[1].toFixed())
```


## 泛型接口

在定义接口时, 为接口中的属性或方法定义泛型类型  
在使用接口时, 再指定具体的泛型类型  

```typescript
// 定义一个CRUD操作的泛型接口
interface BaseCRUD<T> {

  data: T[] //保存内部所有数据对象的数组

  add: (t: T) => number // 添加一个新的数据对象 返回数据对象的id

  getById: (id: number) => T // 根据id查询对应的数据对象
}

/* 定义一个数据类型 */
class User {
  id?: number
  name: string
  age: number

  constructor (name: string, age: number) {
    this.name = name
    this.age = age
  }
}

// 定义操作User数据的实现类
class UserCRUD implements BaseCRUD<User> {
  data: User[] = [] 

  /* 
  添加一个新的数据对象 返回数据对象的id
  */
  add (user: User): number {
    const id = Date.now()
    user.id = id
    this.data.push(user)

    return id
  } 

  /* 
  根据id查询对应的数据对象
  */
  getById (id: number): User {
    return this.data.find(user => user.id===id)
  }
}

// 测试
const userCRUD = new UserCRUD()
const id1 = userCRUD.add(new User('tom', 12))
const id2 = userCRUD.add(new User('tom2', 13))
console.log(userCRUD.data, userCRUD.getById(id1), use
```

## 泛型类

在定义类时, 为类中的属性或方法定义泛型类型
在创建类的实例时, 再指定特定的泛型类型  

```typescript
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function(x: number, y: number) {
  return x + y 
}

let stringNumeric = new GenericNumber<string>()
stringNumeric.zeroValue = 'abc'
stringNumeric.add = function(x: string, y: string) { 
  return x + y
}

console.log(stringNumeric.add(stringNumeric.zeroValue, 'test'))
```

## 泛型约束

如果我们直接对一个泛型参数取 `length` 属性, 会报错, 因为这个泛型根本就不知道它有这个属性

```typescript
// 没有泛型约束
function fn <T>(x: T): void {
  // console.log(x.length)  // error
}
```

我们可以使用泛型约束来实现

```typescript
interface Lengthwise {
  length: number;
}

// 指定泛型约束
function fn2 <T extends Lengthwise>(x: T): void {
  console.log(x.length)
}
```

我们需要传入符合约束类型的值，必须包含必须 `length` 属性：

```typescript
fn2('abc')
// fn2(123) // error  number没有length属性
```