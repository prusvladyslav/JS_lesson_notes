// деструктуризация;

// let age = 18;
// let width = 100;
// let height = 200;

// let [one, two, three] = [18, 100, 200];
// console.log(height);

// const numbers = [1, 2, 3, 4];

// const [one, ...rest] = numbers;
// console.log(rest);

// console.log(one, two, rest);

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const third = [...first, ...second];
// console.log(third);

// const person = {
//   name: "Vlad",
//   age: 18,
//   gender: "male",
//   someObj: {
//     one: "one",
//     two: "two",
//   },
//   someKey: "someValue",
// };

// const personTwo = {
//   name: "Antoha",
//   age: 18,
//   gender: "male",
//   someObj: {
//     one: "one",
//     two: "two",
//   },
//   someKey: "someValue",
// };

// const persons = [person, personTwo];

// const [{ name }, { name: nameTwo }] = persons;

// console.log(name, nameTwo);

// function isAdult(age) {
//   if (age >= 18) return true;
//   return false;
// }

// const name = person.name;
// const gender = person.gender;
// const age = person.age;

// const { name, gender, age } = person;

// const personData = {
//   name: "Vlad",
//   age: 18,
// };

// const personInfo = {
//   gender: "male",
//   age: 20,
// };

// const fullPerson = { age: 18, ...personInfo };

// console.log(fullPerson);

// методы массивов

// const doubleArr = [];

// let someAreBiggerThenThree = false;

// const result = items.forEach((item) => {
//   if (item >= 3) return (someAreBiggerThenThree = true);
// });

// console.log(result);

// console.log(doubleArr);

// console.log(doubleArr);

// const result = items.some((item) => item >= 3);

// console.log(items.every((item) => item > 0));

// console.log(items.filter((item) => item > 3));

// console.log(items.find((item) => item > 3));

// console.log(items.findIndex((item) => item > 3));

// map

// const persons = [
//   {
//     name: "Vlad",
//     surname: "Prus",
//   },
//   {
//     name: "Anton",
//     surname: "Abc",
//   },
// ];

// const result = persons.map((item) => {
//   return {
//     ...item,
//     name: "13212312",
//   };
// });

// console.log(result);

// const items = [10, 6, 12, 68, 46, 79];

// const sorted = items.sort((one, two) => two - one);
// console.log(sorted);

// const rever = items.reverse();
// console.log(rever);
