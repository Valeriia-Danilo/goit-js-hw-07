const outputColor = document.querySelector(".color");
const changeButton = document.querySelector(".change-color-btn");
const body = document.querySelector("body")


changeButton.addEventListener("click", (event) => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  outputColor.textContent = newColor;
});