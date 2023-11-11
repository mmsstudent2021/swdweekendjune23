// selectors

const output = document.getElementById("output");
const width = document.getElementById("width");
const breadth = document.getElementById("breadth");
const lists = document.getElementById("lists");

// functions

const area = (x, y) => x * y;

const calculate = () => {
  output.innerText = area(width.valueAsNumber, breadth.valueAsNumber) + " sqft";
};

const clearInput = () => {
  output.innerText = null;
  width.value = null;
  breadth.value = null;
};

const store = () => {
  lists.innerHTML += `<li> ${width.value} ft * ${breadth.value} ft = ${output.innerText} </li>`;
  clearInput();
};
