// логические операторы

// 1. && - и

// const hasCar = true;
// const hasDriverLicense = true;
// const canDrive = hasCar && hasDriverLicense;
// if (canDrive) console.log("can drive");

// ложно подобные: false, 0, -0, 0n, "", null, undefined и NaN.

// const age = 18;
// const hasDriverLicense = true;
// const gender = "male";
// const isDrunk = false;
 
// if (age >= 18 && hasDriverLicense && gender === "male" && !isDrunk)
//   console.log("can drive");

// 2. || - или

// const login = "user";

// const canLogin = false || false || true;

// if (canLogin) console.log("can login");

// const canDrive = true

// if ((login === "user" || login === "admin") && canDrive)
//   console.log("can login & drive");

// 3. ! - не
// const age = 18
// const isAdult = age >= 18;
// const isDrunk = false;

// 4. тернарные операторы 

// условие ? выражение1 : выражение2

// const age = 12;
// const canDrive = age >= 18 ? "can drive" : "can't drive";
// const nestedTernary = age >= 18 ? "adult" : age >= 13 ? "teenager" : 'child'
// console.log(nestedTernary);

// 5. прототипы в JS 

//  class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayHello(){
//         console.log('public hello');
//     }
//     static staticHello() {
//         console.log('static hello');
//     }
//     #privateHello() {
//         console.log('private hello');
//     }
// }

// class Cat extends Animal {
//     constructor(name, age, color) {
//         super(name, age);
//         this.color = color;
//     }
//     greet() {
//         console.log('Meow');
//     }
// }

// const cat = new Cat('Tom', 2, 'red');
// // cat.greet()
// cat.staticHello()


// const person = {
//     name: "John",
//     age: 30,
//     isMarried: false,
//     greet: () => {
//          console.log('Greetings traveler');
//     }
// }
// const person = new Object({
//         name: "John",
//         age: 30,
//         isMarried: false,
//         greet: () => {
//              console.log('Greetings traveler');
//         }
// })

// const str = "Hello".toLowerCase()

// person.greet()
// person.sayHello()
// console.log(person.toString());
// console.log(person);

// Array static and inherited methods 

// Array.from()
// Array.isArray()

// добавление элементов 

// const arr1 = ['abc', 'cbd', 'abe']
// const arr2 = [1, 2, 3]

// console.log(arr3);


// arr.push() -> в конце массива, возвращает длину массива

// arr.unshift() -> в начало массива, возвращает длину массива

// удаление элементов 

// arr.pop() -> удаление последнего элемента, возвращает удаленный элемент

// arr.shift() -> удаление первого элемента, возвращает удаленный элемент

// получение элементов

// arr.at() -> по индексу, возвращает элемент

// склеивание массивов

// arr.concat() -> возвращает новый массив



