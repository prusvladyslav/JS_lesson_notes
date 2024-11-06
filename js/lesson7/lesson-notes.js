const body = document.body;

const form = document.createElement("form");

const button = document.createElement("button");

button.textContent = "login";

button.setAttribute("type", "button");

const input = document.createElement("input");

input.setAttribute("type", "text");

input.setAttribute("placeholder", "enter your name");

const logout = document.createElement("button");
logout.textContent = "logout";

const logginDiv = document.createElement("div");
logginDiv.textContent = "You are logged in";

logout.addEventListener("click", () => {
  const div = document.createElement("div");
  div.textContent = "You are not logged in";
  // удалить из localeStorage
  localeStorage.removeItem("isLoggedIn");
  logginDiv.remove();
  body.append(div);
});

button.addEventListener("click", () => {
  if (input.value !== "admin") return;

  body.append(logginDiv);
  // добавить/ обновить значение в localeStorage
  localeStorage.setItem("isLoggedIn", "true");
});

// колбек может получать значение event
input.addEventListener("input", (e) => {
  // получить значение input
  console.log(e.target.value);
  // получить значение input type=checked
  console.log(e.target.checked);
});

body.onload = () => {
  form.append(input);
  form.append(button);
  body.append(logout);
  body.append(form);
  // получить значение из localeStorage
  if (localeStorage.getItem("isLoggedIn") === "true") {
    body.append(logginDiv);
  }
};

// позволяет отменить процесс события, например перезагрузку страницы для form
// e.preventDefault();
// позволяет отменить опускание события вниз
// e.stopPropagation();
