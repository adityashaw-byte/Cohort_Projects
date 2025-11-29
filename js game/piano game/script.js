// All your custom synth piano sounds (you can rename or replace URLs)
const audios = [
  "1.mp3",
  "2.mp3",
  "3.mp3",
  "4.mp3",
  "5.mp3",
  "6.mp3",
  "7.mp3",
  "8.mp3",
  "9.mp3",
  "10.mp3",
  "11.mp3",
  "12.mp3",
  "13.mp3",
  "14.mp3",
  "15.mp3",
];

// Select all keys in the piano
const allKeys = document.querySelectorAll(".piano .keys");

// Play sound by index
function playSound(i) {
  if (audios[i]) {
    const audio = new Audio(audios[i]);
    audio.play();
  }
}

// Click functionality
allKeys.forEach((key, i) => {
  key.onclick = () => {
    playSound(i);
  };
});

// Keyboard key mapping (A, S, D... → piano keys)
const keyMap = {
  a: 0,
  s: 1,
  d: 2,
  f: 3,
  g: 4,
  h: 5,
  j: 6,
  k: 7,
  l: 8,
  q: 9,
  w: 10,
  e: 11,
  r: 12,
  t: 13,
  y: 14,
};

// Keyboard press event
document.body.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  if (keyMap.hasOwnProperty(key)) {
    const index = keyMap[key];
    playSound(index);

    // Optional visual effect
    const pianoKeys = document.querySelectorAll(".piano .keys");
    const pressedKey = pianoKeys[index];
    if (pressedKey) {
      pressedKey.style.transform = "translateY(5px)";
      pressedKey.style.boxShadow = "0 2px 0 black";
      setTimeout(() => {
        pressedKey.style.transform = "";
        pressedKey.style.boxShadow = "0 5px 0 black";
      }, 150);
    }
  }
});
