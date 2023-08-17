const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

const imageRandom1 = "images/dice" + randomNumber1 + ".png";
const imageRandom2 = "images/dice" + randomNumber2 + ".png";

const image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageRandom1);

const image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imageRandom2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins 🏆";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🏆";
} else {
  document.querySelector("h1").innerHTML = "Match Draw 🤝";
}
