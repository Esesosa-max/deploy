const squares = document.querySelectorAll(".square");
const answerDisplay = document.querySelector(".correct");
let colourDisplay = document.querySelector("h1");
const button = document.querySelector("button");
const easy = document.querySelector(".easy");
let colours = [];
function GenerateRandomColour(num) {
  for (let i = 0; i < squares.length; i++) {
    colours.push(
      `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
        Math.random() * 255
      )},${Math.floor(Math.random() * 255)})`
    );
  }
}
function assign_colors() {
  colours.forEach((color, index) => {
    squares[index].style.background = color;
    squares[index].setAttribute("data-colour", color);
  });
}
function getRandomPickedColour() {
  const randomColour = colours[Math.floor(Math.random() * colours.length)];
  colourDisplay.textContent = randomColour;
  return randomColour;
}
GenerateRandomColour();
assign_colors();
checkColour();
let pickedColour = getRandomPickedColour();
function checkColour() {
  squares.forEach((square) => {
    square.addEventListener("click", (e) => {
      if (e.target.dataset.colour === pickedColour) {
        answerDisplay.textContent = "Correct";
        // setTimeout(() => reset(), 1150);
      } else {
        answerDisplay.textContent = "wrong";
        e.target.classList.add("hide");
      }
    });
  });
}
button.addEventListener("click", (e) => {
  reset();
});

function reset() {
  colours = [];
  GenerateRandomColour();
  squares.forEach((square) => square.classList.remove("hide"));
  assign_colors();
  checkColour();
  pickedColour = getRandomPickedColour();
}
