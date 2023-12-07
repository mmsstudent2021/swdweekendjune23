import Typed from "typed.js";
import AOS from "aos";
import "./style.css";
import WOW from "wow.js";
import Glide from "@glidejs/glide";
import Chart from 'chart.js/auto';
import "./node_modules/waypoints/lib/noframework.waypoints"

const myTest = document.querySelector("#myTest");
const header = document.querySelector("#header");
const nextSection = document.querySelector("#nextSection");
const adObj = document.querySelector("#adObj");
const typeUi = document.querySelector("#typeUi");
const myChartUi = document.querySelector("#myChart");

const myTestWaypoint = new Waypoint({
  element : myTest,
  handler(direction){
    // console.log("my test in viewport",direction);
    if(direction === "down"){
      adObj.classList.remove("translate-x-full");
      header.classList.remove("bg-white");
      header.classList.add("bg-sky-500","text-white");
    }else{
      adObj.classList.add("translate-x-full");
      header.classList.add("bg-white");
      header.classList.remove("bg-sky-500","text-white");
    }
  },
  offset : "50%"
})

const nextSectionWaypoint = new Waypoint({
  element : nextSection,
  handler(direction){
    if(direction === "down"){
      adObj.classList.add("translate-x-full");
      header.classList.add("bg-white");
      header.classList.remove("bg-sky-500","text-white");
    }
  },
  offset : "20%"
})



const chart = new Chart(myChartUi,{
  type: "line",
  data : {
    labels : ["html","css","js","php","sql","python","c","java","rust"],
    datasets : [
      {
        label : "2021 user rate",
        data : [5,3,12,8,19,15,5,6,9],
        borderWidth : 5
      },
      // {
      //   label : "2022 user rate",
      //   data : [5,12,8,19,15,5,6,9,3],
      //   borderWidth : 5
      // },
      // {
      //   label : "2023 user rate",
      //   data : [5,15,12,8,19,5,6,9,3],
      //   borderWidth : 5
      // }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
})

const typed = new Typed(typeUi, {
  strings: [
    "Companies <span class='text-pink-500'>.</span>",
    "House",
    "Organization",
  ],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 3000,
  contentType: "html",
  loop: true,
});

AOS.init({
  once: true,
});

const wow = new WOW({
  boxClass: "wow", // animated element css class (default is wow)
  animateClass: "animate__animated",
});

wow.init();

new Glide(".glide", {
  type: "carousel",
  startAt : 2,
  focusAt : "center",
  perView: 3,
  breakpoints: {
    400: {
      perView: 1,
    },
    800: {
      perView: 2,
    },
  },
}).mount();
