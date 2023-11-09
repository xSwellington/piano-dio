const allowkeys = [];
const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeInput = document.querySelector(".volume-slider input");
const toogleKeyInput = document.querySelector(".key-checks input");
let audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
  if (!allowkeys.includes(key)) return;
  audio.src = `src/tunes/${key}.wav`;
  audio.play();
  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  console.log(clickedKey);
  if (clickedKey) {
    clickedKey.classList.add("active");
    setTimeout(() => {
      clickedKey.classList.remove("active");
    }, 150);
  }
};

const handleVolume = (e) => {
  e.preventDefault();
  audio.volume = e.target.value;
};

const handleKeyViewToogle = (e) => {
  e.preventDefault();
  pianoKeys.forEach(key => key.classList.toggle("hide"))
};

pianoKeys.forEach((key) => {
  const k = key.dataset.key;
  allowkeys.push(k);
  key.addEventListener("click", () => playTune(k));
});

document.addEventListener("keydown", ({ key }) => {
  playTune(key);
});

volumeInput.addEventListener("input", handleVolume);
toogleKeyInput.addEventListener("input", handleKeyViewToogle);
