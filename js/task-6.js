const inputAmount = document.querySelector(".controls-amount");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createButton.addEventListener("click", handleCreate);
destroyButton.addEventListener("click", handleDestroy);
  
function handleCreate() {
    const amount = inputAmount.value;
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      inputAmount.value = ""; 
    } else {
      alert("Please enter a number between 1 and 100.");
    }
  }

  function handleDestroy() {
    destroyBoxes();
};

  function createBoxes(amount) {
    destroyBoxes(); 

    let size = 30;
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
      size += 10;
    }
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = "";
  }

      function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  };





