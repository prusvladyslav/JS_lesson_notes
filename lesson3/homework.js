// реализовать функцию createMultiplier, которая принимает один аргумент и возвращает функцию, которая умножает его на число
const multiplyBy3 = createMultiplier(3);
console.log(multiplyBy3(5)); // 15

// реализовать функцию createBankAccount, которая принимает стартовый баланс и возвращает объект с методами deposit, withdraw, checkBalance
const account = createBankAccount(100);
account.deposit(50);
console.log(account.checkBalance()); // 150
account.withdraw(30);
console.log(account.checkBalance()); // 120

// реализовать функцию makePerson, которая будет принимать объект person имеющий такие поля: firstName, lastName, age, gender и
// также будет принимать два колбека, один будет использовать для получения fullName, второй будет использовать для получения значения canDrive
// колбек для получения fullName релизовать по собственному желанию, колбек для получения canDrive должен возвращать true если age больше либо равен 18
// и gender равен male
// функция makePerson должна возвращать объект с такими полями: fullName, age, gender, canDrive
// аргумент колбек функции для fullName должен иметь дефолтное значение - функцию, любую
const makePerson = (person, canDriveCb, getFullNameCb) => {};

// реализовать рекурсивную функцию countup, которая принимает аргумент initValue, и finishValue, и выводит в консоль числа от initValue до finishValue
countup(1, 20);
