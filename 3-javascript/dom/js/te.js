const textInput = document.querySelector("#textInput");
const colorInput = document.querySelector("#colorInput");
const sizeInput = document.querySelector("#sizeInput");
const fontInput = document.querySelector("#fontInput");
const display = document.querySelector("#display");

textInput.addEventListener("keyup", () => {
  display.innerText = textInput.value;
});


colorInput.addEventListener("change",() => {
    display.style.color = colorInput.value
})

sizeInput.addEventListener("change",() => {
    display.style.fontSize = sizeInput.value + "px"

})

fontInput.addEventListener("change",() => {
    display.style.fontFamily = fontInput.value
})