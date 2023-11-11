// console.dir(document)

// select an element
const heading = document.getElementById("heading");
const para = document.getElementById("para");
const lists = document.getElementById("lists");
const textInput = document.getElementById("textInput");
const btn = document.getElementById("btn");
const link = document.getElementById("link");


// heading.classList.remove("text-violet-600")
// heading.classList.remove("font-sans")

// heading.classList.replace("text-violet-600","text-pink-500")

// heading.classList.toggle("font-sans") 
// heading.classList.toggle("bg-gray-200") 
// heading.classList.toggle("text-center") 
// heading.classList.toggle("font-sans")

console.log(heading.classList);

console.log(heading.classList.contains("text-center"));
console.log(heading.classList.contains("text-4xl"));
console.log(heading.classList.contains("font-sans"));


// btn.classList.add(
//   "bg-blue-600",
//   "text-white",
//   "px-10",
//   "py-2",
//   "border",
//   "border-blue-600"
// );

// console.log(btn.classList);

function run() {
  heading.innerText = textInput.value;
  textInput.value = null;
}

// console.log(textInput);

// console.log(heading);
// console.log(heading.innerText);

// heading.innerText = "san kyi tar"

// para.innerHTML = "hello hello htet san tar"

// lists.innerHTML = "<li>one</li>"
// lists.innerHTML += "<li>two</li>"
// lists.innerHTML += "<li>three</li>"

// textInput.value = "hhz"

// btn.innerText = "click me"

// console.log(heading.innerHTML);
// console.log(para);
// console.log(para.innerText);
// console.log(para.innerHTML);
// console.log(lists);
// console.log(lists.innerText);
// console.log(lists.innerHTML);
// console.log(textInput);
// console.log(btn);

// const obj = {
//     a : "aaa",
//     b : "bbb",
//     c : "ccc",
// }

// console.log(obj.a);

// obj.a = "xxx"

// console.log(obj);

// link.style.color = "gray"
// link.style.backgroundColor = "pink"
// link.style.padding = "10px 20px"
// link.style.textDecoration = "none";
// link.style.borderRadius = "10px"

// console.log(link.style);

// console.log(heading.style);
// console.log(heading.style.color);

// console.dir(link)
// console.dir(link.href)
// link.href = "https://mms-it.com"
// link.target = "_self"

// link.setAttribute("href","https://youtube.com")

// console.log(link.getAttribute("href"));

// link.removeAttribute("target")
