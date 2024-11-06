const promise = new Promise((resolve, reject) => {
  const random = Math.random();
  if (random > 0.5) {
    return setTimeout(() => {
      resolve("data");
    }, 1000);
  }
  return reject("error");
});

promise
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
  .finally(() => {
    // alert("Promise is done");
  });

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));

// примеры запросов к нашему тестовому серверу
// каждый запрос должен иметь credentials: "include" чтобы всё сработало
// post запросы обязательно должны иметь headers: { "Content-Type": "application/json" },

fetch("https://hono-cloudflare.onrender.com/auth/login", {
  method: "POST",
  credentials: "include",
  body: JSON.stringify({
    email: "pruvladik@gmail.com",
    password: "123",
  }),
  headers: { "Content-Type": "application/json" },
});

fetch("https://hono-cloudflare.onrender.com/todos", {
  credentials: "include",
});
