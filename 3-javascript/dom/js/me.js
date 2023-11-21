// const heading = document.querySelector("#heading");
// const clearEventBtn = document.querySelector("#clearEventBtn");

// const show = () => {
//     console.log("U click Hading");
// }

// heading.addEventListener("click",show)

// clearEventBtn.addEventListener("click",() => {
//     heading.removeEventListener("click",show)
// })

// const boxA = document.querySelector("#boxA");
// const boxB = document.querySelector("#boxB");
// const boxC = document.querySelector("#boxC");
// const btn = document.querySelector("#btn");

// boxA.addEventListener("click",() => {
//     console.log("U click BoxA");
// },false)

// boxB.addEventListener("click",() => {
//     console.log("U click BoxB");
// },false)

// boxC.addEventListener("click",(event) => {
//     event.stopPropagation()
//     console.log("U click BoxC");
// },false)

// btn.addEventListener("click",(event) => {
//     event.stopPropagation()
//     console.log("U click btn");
// },false)

const textInput = document.querySelector("#textInput");
const listGroup = document.querySelector("#listGroup");
const lists = document.querySelectorAll(".list-item");
// console.log(lists);

textInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const li = document.createElement("li");
    li.innerText = textInput.value;
    li.className = "list-item hover:bg-gray-400";
    listGroup.append(li);
    textInput.value = null
  }
});

// multiple element event listen
// lists.forEach((list) => {
//   list.addEventListener("click", () => {
//     console.log(list.innerText);
//   });
// });

listGroup.addEventListener("click",(event) => {
    console.log(event.target.innerText);
})