const select = document.querySelector("#select");
const textInput = document.querySelector("#textInput");
const fileInput = document.querySelector("#fileInput");
const registerFrom = document.querySelector("#registerFrom");
const link = document.querySelector("#link");

link.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("U click link");
});

select.addEventListener("change", () => {
  console.log(select.value);
});

textInput.addEventListener("change", () => {
  console.log(textInput.value);
});

fileInput.addEventListener("change", () => {
  console.log(fileInput.files[0]);
});

registerFrom.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("U submit");
  console.log(textInput.value);
  console.log(select.value);
  console.log(fileInput.value);
});

// addEventListener("scroll",() => {
//     console.log(window.scrollY);
// })


// alert("hello")

// window.addEventListener("load", () => {
//   console.log("one");
// });

// console.log("two");
// console.log("three");
