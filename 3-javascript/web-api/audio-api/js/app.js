const audio = new Audio("./audio/to_the_bone.mp3");
audio.volume = 0.3;

const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const volumeRange = document.querySelector("#volumeRange");

volumeRange.addEventListener("change", () => {
  // console.log(volumeRange.value);
  audio.volume = volumeRange.value / 10;
});

playBtn.addEventListener("click", () => {
  audio.play();
});

pauseBtn.addEventListener("click", () => {
  audio.pause();
});

audio.addEventListener("loadeddata", () => {
  console.log("duration", audio.duration);
  console.log("volume", audio.volume);
});

audio.addEventListener("play", () => {
  console.log("U play");
});

audio.addEventListener("pause", () => {
  console.log("current time", audio.currentTime);
});

audio.addEventListener("ended", () => {
  console.log("song finish");
//   audio.play();
});
