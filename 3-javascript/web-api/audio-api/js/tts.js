const speechBtn = document.querySelector("#speechBtn");
const textInput = document.querySelector("#textInput");
const recordBtn = document.querySelector("#recordBtn");
const recordStatus = document.querySelector("#recordStatus");

const speak = (text) => {
  const speechSynthesis = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.pitch = 1;
  utterance.rate = 0.8;
  speechSynthesis.speak(utterance);

  utterance.addEventListener("start", () => {
    console.log("Speak Start");
  });

  utterance.addEventListener("end", () => {
    console.log("Speak end");
  });
};

speechBtn.addEventListener("click", () => {
  speak(textInput.value);
});

recordBtn.addEventListener("click", () => {
  const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

  recognition.addEventListener("result", (event) => {
    textInput.value += " " + event.results[0][0].transcript + ".";
  });

  recognition.addEventListener("soundstart", () => {
    recordStatus.innerText = "recording ...";
  });

  recognition.addEventListener("soundend", () => {
    recordStatus.innerText = "";
  });

  recognition.start();
});
