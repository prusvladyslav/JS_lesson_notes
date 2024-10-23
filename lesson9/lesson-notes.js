const makePromise = (num) =>
  new Promise((resolve, reject) => {
    const random = Math.random();
    if (random > 0) {
      return setTimeout(() => {
        resolve(`promise ${num} resolved`);
      }, 1000);
    }
    return reject(`promise ${num} rejected`);
  });

// для использования await внутри функции нужнен async
async function main(params) {
  const promise = await makePromise(1);
}
// но если есть type="module" то можно использовать await без функции
const somePromise = await makePromise(1);

// при этом даже если type="module", внутри функции чтобы использовать await нужен async
const someFunc = () => {
  // const promise = await makePromise(1);
};

// если нету await, то async не делает ничего
const someOtherFunc = async () => {
  console.log("123");
  console.log("some other code");
};

// Promise.all принимает массив промисов, выполняет их паралельно и возвращает массив результатов, при этом если 1 промис упал, то упадут все
const [promise1, promise2] = await Promise.all([
  makePromise(1),
  makePromise(2),
]);

console.log(promise1, promise2);

// Promise.allSettled делает тоже самое, но при этом даже если 1 промис упал, то все остальные промисы будут выполнены
const [promise3, promise4] = await Promise.allSettled([
  makePromise(3),
  makePromise(4),
]);
console.log(promise3, promise4);

// примеры дефолтного и именнованого импорта
import variable, { user as user2 } from "./test.js";

const getUser = new Promise((resolve, reject) => {
  const random = Math.random();
  return setTimeout(() => {
    if (random > 0.5) {
      return resolve({ favoriteColor: "blue", favoriteBook: "book" });
    }
    resolve({
      favoriteColor: "red",
      favoriteBook: "book",
      data: { name: "Vlad" },
    });
  }, 1000);
});

const user = await getUser;
// пример Optional Chaining
console.log(user?.data?.name || "No user name");
