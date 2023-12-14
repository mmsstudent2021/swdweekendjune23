const textInput = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const output = document.querySelector("#output");

const task = [];

const listUi = (text) => {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  btn.innerText = "del";
  btn.classList.add("del");
  li.append(btn);
  const textNode = document.createTextNode(text);
  li.append(textNode);
  return li;
};

(() => {
  const todo = localStorage.getItem("todo");
  if (todo) {
    JSON.parse(todo).forEach((el) => {
        output.append(listUi(el))
        task.push(el)
    });
  }
})();

addBtn.addEventListener("click", () => {
  task.push(textInput.value);

  localStorage.setItem("todo", JSON.stringify(task));

  output.append(listUi(textInput.value));

  textInput.value = null;
  //   localStorage.setItem("todo", output.innerHTML);
});

output.addEventListener("click", (event) => {
  if (event.target.classList.contains("del")) {
    event.target.closest("li").remove();
    // localStorage.setItem("todo", output.innerHTML);
  }
});

// const obj = { a: "aaa", b: "bbb", c: "ccc" };
// console.log(obj);
// const json = JSON.stringify(obj);
// localStorage.setItem("my_obj", json);
// console.log(JSON.parse(localStorage.getItem("my_obj")));
// const newObj = JSON.parse(json);
// console.log(newObj);
