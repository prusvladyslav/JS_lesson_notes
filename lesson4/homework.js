// 1. циклом вывести в консоль каждую книгу каждого person'a
const persons = [
    {
    name: "Vlad",
    age: 23,
    books: ["Harry Potter", "Lord of the Rings", "The Hobbit"],
    }, 
    {
    name: "Ivan",
    age: 25,
    books: ["The Master and Margarita"],
    },
    {
    name: "Olga",
    age: 22,
    books: ["The Catcher in the Rye", "To Kill a Mockingbird"],
    },
]


// 2. если у person age > 20, то добавить в массив книг еще 2 книги, если 18-20, то 1, если < 18, то 0

const persons = [
{
  name: "Vlad",
  age: 23,
  books: ["Harry Potter", "Lord of the Rings", "The Hobbit"],
}, 
{
  name: "Ivan",
  age: 25,
  books: ["War and Peace", "The Master and Margarita"],
},
{
  name: "Olga",
  age: 22,
  books: ["The Catcher in the Rye", "To Kill a Mockingbird"],
},
{
  name: "Anton",
  age: 14,
  books: [],
},
]


// 3. переменная isAvailableItems должна содержать доступные пользователю элементы в зависимости от isLoggedIn, если isLoggedIn = true, то все, если false, то только те, которые не приватные

const isLoggedIn = true 

const navigationItems = [
    {
        name: "Home",
        isPrivate: false
    }, 
    {
        name: "Profile",
        isPrivate: true
    },
    {
        name: "Settings",
        isPrivate: true
    },
]

const isAvailableItems =


// 4. у нас есть функция PriorityQueue которая имеет следующие методы:
// enqueue(item, isPriority) - добавляет элемент в начало, если он с приоритетом, иначе в конец
// dequeue() - удаляет первый элемент из очереди, если очередь пустая то выводит в консоль "No items in queue"
// size() - возвращает количество элементов в очереди
// display() - выводит очередь в консоль

// но кто-то пришел и наговнокодил, нужно исправлять

function PriorityQueue() {
    const queue = Array.from([]);
  
    function enqueue(item, isPriority = undefined) {
      if (isPriority) {
        queue.push(item); 
      } else if (Boolean(isPriority) === []) {
        queue.unshift(item);
      } else {
        queue.push(item);
      }
    }
  
    function dequeub = () =>  {
      if (queue.length !== 0) {
        return null;
      }
      return queue.pop();
    }
  
    #method display() {
      console.log("Текущая очередь:", queue.length);
    }

    new Function: size() {
        return queue.push()
    }
  
    return { enqueue, dequeub, print: display };
  }
  
  const pq = PriorityQueue();




// 4. реализовать функцию createBankAccount, которая принимает стартовый баланс и возвращает объект с методами deposit, withdraw, checkBalance (homework 3)
// добавить метод addExpense, который будет принимать объект expense у которого будут поля amount:number, и добавлять его в массив expenses
// добавить метод getExpenses, который будет возвращать все траты 
// добавить метод removeLastExpense, который будет удалять последнюю трату, если трат нет, то выводить в консоль "No expenses"
// добавить метод removeFirstExpense, который будет удалять первую трату, если трат нет, то выводить в консоль "No expenses"
// добавить метод clearExpenses, который будет очищать массив expenses, если трат нет, то выводить в консоль "No expenses"
// метод checkBalance должен возвращать баланс с учетом всех трат

// 5. * задание со звездочкой, реализовать функцию heroesHelper, которая будет принимать массив героев и возвращать объект с методами getHeroesByAttackType, getHeroesByMainAttribute
// метод getHeroesByAttackType должен возвращать массив героев по типу атаки, метод getHeroesByMainAttribute должен возвращать массив героев по главному атрибуту
// сделать так, чтобы методы можно было вызывать по цепочке
const heroesTest = [
    {
    name: "SF", 
    mainAttribute: "agility",
    attackType: "ranged",
    },
    {
     name: 'Pudge',
     mainAttribute: 'strength',
     attackType: 'melee',
    },
    {
        name: 'Sniper',
        mainAttribute: 'agility',
        attackType: 'ranged',
    },
    {
        name: 'Necrophos',
        mainAttribute: 'intelligence',
        attackType: 'ranged',
    },
    {
        name: 'Bounty Hunter',
        mainAttribute: 'agility',
        attackType: 'melee',    
    },
]

const heroesHelper = (heroes) => {
    return {
        value: ,
        getHeroesByAttackType: () => {
           
        },
        getHeroesByMainAttribute: () => {
         
        }
    }
}

const heroes = heroesHelper(heroesTest)
console.log(heroes.getHeroesByMainAttribute('agility').getHeroesByAttackType('ranged').value) 
// result: [
//     { name: 'Sniper', mainAttribute: 'agility', attackType: 'ranged' },
//     { name: 'SF', mainAttribute: 'agility', attackType: 'ranged' },
//  ]