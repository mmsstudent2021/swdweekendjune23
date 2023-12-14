const keys = [
  {
    id: 1,
    sound: "C4",
    letter: "a",
  },
  {
    id: 2,
    sound: "D4",
    letter: "s",
  },
  {
    id: 3,
    sound: "E4",
    letter: "d",
  },
  {
    id: 4,
    sound: "F4",
    letter: "f",
  },
  {
    id: 5,
    sound: "G4",
    letter: "j",
  },
  {
    id: 6,
    sound: "A4",
    letter: "k",
  },
  {
    id: 7,
    sound: "B4",
    letter: "l",
  },
  {
    id: 8,
    sound: "C5",
    letter: ";",
  },
];

const piano = document.querySelector("#piano");

keys.forEach((key) => {
  const keyUi = document.createElement("div");
  keyUi.innerText = key.sound;
  keyUi.classList.add("key");
  keyUi.setAttribute("sound", key.sound);

  piano.append(keyUi);
});

const playSound = (sound) => {
  const audio = new Audio(`./sound/${sound}.mp3`);
  audio.play();
};

const activeKey = (sound) => {
  const currentKey = document.querySelector(`[sound='${sound}']`);
  currentKey.classList.add("active");
  currentKey.addEventListener("transitionend", () => {
    currentKey.classList.remove("active");
  });
};

piano.addEventListener("click", (event) => {
  if (event.target.classList.contains("key")) {
    const currentKey = event.target;
    const currentSound = currentKey.getAttribute("sound");
    playSound(currentSound);
    activeKey(currentSound)
  }
});

document.addEventListener("keyup", (event) => {
  const findKey = keys.find((key) => key.letter === event.key);
  if (findKey) {
    console.log(event.key);
    playSound(findKey.sound);
    activeKey(findKey.sound)
  }
});
