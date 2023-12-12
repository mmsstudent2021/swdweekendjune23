// window.addEventListener("resize", () => {
//   console.clear();
//   console.log("inner width", window.innerWidth);
//   console.log("inner height", window.innerHeight);
//   console.log("outer width", window.outerWidth);
//   console.log("outer height", window.outerHeight);
// });

// alert("hello")

// addEventListener("scroll", () => {
//   const el = document.querySelector("p");
// //   console.log(el.getBoundingClientRect());
//   const computedStyle = getComputedStyle(el);
//   const elHeight = parseInt(computedStyle.height)
//   if(scrollY > elHeight * 0.7){
//     console.log("thank for reading finish");
//   }
// });

// addEventListener("offline",() => {
//     console.log("U r offline");
// })

// addEventListener("online",() => {
//     console.log("U r online");
// })

// const clock = document.querySelector("#clock");
// const d = new Date();

// clock.innerText = d.toTimeString();

// const run = () => {
//   // console.log("I'm run");
//   //   console.clear();
//   //   console.log(new Date());
//   const currentDate = new Date();
//   clock.innerText = currentDate.toTimeString();
// };

// const interval = setInterval(run,1000)

// const timer = setTimeout(run,5000)

// document.querySelector("#btn").addEventListener("click",() => {
//     // clearTimeout(timer)
//     clearInterval(interval)
//     console.log("timer clear");

// })

// const interval = setInterval(run,1000)

// let openedWindow;
// document.querySelector("#googleBtn").addEventListener("click", () => {
//   //   const windowFeatures = "left=100,top=100,width=320,height=320";
//   //   const handle = window.open(
//   //     "https://www.mozilla.org/",
//   //     "mozillaWindow",
//   //     windowFeatures
//   //   );
//   openedWindow = window.open(
//     "https://www.mozilla.org/",
//     "mozillaWindow",
//     "resizable"
//   );
// });

// document.querySelector("#closeBtn").addEventListener("click", () => {
//   openedWindow.close();
// });

// document.querySelector("#resizeBtn").addEventListener("click", () => {
//   window.resizeTo(500, 1000);
// });

// document.querySelector("#scrollBtn").addEventListener("click", () => {
//   window.scrollTo(0, here.getBoundingClientRect().top - 100);
// });

// const here = document.querySelector("#here");
// console.log(here.getBoundingClientRect().top);

// addEventListener("scroll", () => {
//   console.log(scrollY);
// });

// `console.log(screen);
// screen.orientation.addEventListener("change", () => {
//   console.log(screen.orientation);
// });`


// console.log(history);
console.log(navigator);