// 1. переменная namesToUpperCase должна содержать имена всех персонов капсом, то есть ['VLAD', "IVAN" ...]

const persons = [
  {
    name: "Vlad",
    age: 23,
  },
  {
    name: "Ivan",
    age: 25,
  },
  {
    name: "Olga",
    age: 22,
  },
  {
    name: "Anton",
    age: 14,
  }
];

const namesToUpperCase =

// 2.

const books = [
    { title: "1984", author: "George Orwell", year: 1949, genre: "dystopia" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: 'documentary' },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "fiction" },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, genre: 'romance' },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, genre: "fiction" },
  ];

// все названия книг
const titles =

// книги вышедшие после 1950 года
const newBooks =

  // книга у которой автор "Harper Lee"
const harperLeeBook =

// все книги с жанром fiction
const fictionBooks =

  // есть ли книга с жанром romance
const someAreRomance =

// 3. каждому юзеру нужно добавить ключ transactions, который будет содержать массив транзакций, которые производил юзер, отсортированные по возрастанию

const users = [
  {
    id: 1,
    name: "Vlad",
  },
  {
    id: 2,
    name: "Ivan",
  },
  {
    id: 3,
    name: "Olga",
  },
  {
    id: 4,
    name: "Anton",
  },
];

const transactions = [
  {
    userId: 1,
    amount: 2000,
  },
  {
    userId: 2,
    amount: 345,
  },
  {
    userId: 3,
    amount: 2400,
  },
  {
    userId: 4,
    amount: 50,
  },
  {
    userId: 3,
    amount: 200,
  },
  {
    userId: 1,
    amount: 1500,
  },
  {
    userId: 2,
    amount: 300,
  },
];

const usersWithTransactions =
console.log(usersWithTransactions);

// [{
//   "id": 1,
//   "name": "Vlad",
//   "transactions": [
//       {
//           "userId": 1,
//           "amount": 1500
//       },
//       {
//           "userId": 1,
//           "amount": 2000
//       },
//
//   ]
// ...
// }]

// 4. реализовать функцию map, должна принимать массив первым аргументом, функцию вторым аргументом, и возвращать новый массив (работать как метод .map)

const doubleArr = map([1, 2, 3], (el) => el * 2);
console.log(doubleArr);
// // [2, 4, 6]


// test commit
