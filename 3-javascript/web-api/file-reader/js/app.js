const fileInput = document.querySelector("#fileInput");
const output = document.querySelector("#output");


fileInput.addEventListener("change",() => {
    const reader = new FileReader();
    reader.addEventListener("load",(event) => {
        const img = new Image();
        img.height = 200;
        img.src = event.target.result;
        output.append(img)
        fileInput.value = null
    })
    reader.readAsDataURL(fileInput.files[0])
})