const btn = document.querySelector("button"); // находит элемент по css селектору p.class p#id и тд
const body = document.querySelector("body");
const input = document.getElementById("name"); // находит элемент по id аттрибуту
let index = 1;

// добавляет слушатель события на элемент, первый параметр название события
// второй параметр колбек функция которая будет вызываться при событии

btn.addEventListener("click", () => {
  // createElement принимает имя тега и возвращает элемент
  const newDiv = document.createElement("div");
  // innerHTML это внутренний html элемента, может содержать текст либо другие элементы
  newDiv.innerHTML = index + "." + " " + input.value;

  const removeBtn = document.createElement("button");
  // textContent это внутренний текст элемента
  removeBtn.textContent = "X";

  const id = index;
  // мы можем мутировать аттрибуты элемента такие как например id
  newDiv.id = id;
  // либо же так
  // newDiv.setAttribute("id", id);

  removeBtn.addEventListener("click", () => {
    // у всех html элементов есть метод remove который его удаляет
    document.getElementById(id).remove();
  });

  // insertBefore принимает элемент, и элемент перед которым нужно его вставить
  // аттрибут firstChild указывает на первого чилдрена в элементе
  newDiv.insertBefore(removeBtn, newDiv.firstChild);

  // appendChild принимает элемент и добавляет его в конец элемента
  body.appendChild(newDiv);

  index++;
  // input.value это текущие значение input элемента с типом text, мы можем его мутировать
  input.value = "";
});

// мы можем также обращаться к body через document.body
// onload это слушатель события который вызывается при загрузке элемента
document.body.onload = addElement;

function addElement() {
  const newDiv = document.createElement("div");

  // ещё один способ добавить элементу текст, тоже самое что и textContent
  const newContent = document.createTextNode("Hi there and greetings!");

  newDiv.appendChild(newContent);
  // так же можно добавлять элементы через метод append который может принимать несколько элементов, а так же текст
  document.body.append("some text", newDiv);
}
