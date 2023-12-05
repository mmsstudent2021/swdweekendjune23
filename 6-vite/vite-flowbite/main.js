// import { Carousel } from "flowbite";
import { Drawer, Modal } from "flowbite";
import "./style.css";
// import "./node_modules/flowbite/dist/flowbite"



const drawerBtn = document.querySelector("#drawerBtn");
const drawerUi = document.querySelector("#my-drawer")
const drawer = new Drawer(drawerUi)

drawerBtn.addEventListener("click",() => {
    setTimeout(() => {
        drawer.show()
    }, 3000);
})










const modalBtn = document.querySelector("#modalBtn");

const modalUi = document.querySelector("#my-modal");
const modalOptions = {
    backdrop: 'static',
}

const modal = new Modal(modalUi,modalOptions)


modalBtn.addEventListener("click",() => {
    // console.log(modal);
    modal.show()
})

// const slideUi = document.querySelector("#my-slide");
// const slideNext = document.querySelector("#slideNext");
// const items = [
//   {
//     position: 0,
//     el: document.getElementById("my-slide-1"),
//   },
//   {
//     position: 1,
//     el: document.getElementById("my-slide-2"),
//   },
//   {
//     position: 2,
//     el: document.getElementById("my-slide-3"),
//   },
//   {
//     position: 3,
//     el: document.getElementById("my-slide-4"),
//   },
// ];

// const uSlideUi = document.querySelector("#my-slide");
// const uSlideItems = [
//   {
//     position: 0,
//     el: document.getElementById("u-slide-1"),
//   },
//   {
//     position: 1,
//     el: document.getElementById("u-slide-2"),
//   },
//   {
//     position: 2,
//     el: document.getElementById("u-slide-3"),
//   },
//   {
//     position: 3,
//     el: document.getElementById("u-slide-4"),
//   },
// ];

// const options = {
//   defaultPosition: 1,
//   interval: 7000,
// };

// const slider = new Carousel(slideUi, items, options);
// const uSlider = new Carousel(uSlideUi, uSlideItems, options);

// slideNext.addEventListener("click", () => {
//   // console.log("U click");
//   // console.log(slider);
//   slider.next();
//   uSlider.prev();
// });
