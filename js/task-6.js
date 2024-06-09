const inputAmount = document.querySelector(".controls-amount");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");


      function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
};
  

function createBoxes(amount) {
  destroyBoxes();
      let createDivBoxes = '';
  for (let i = 0; i < amount; i += 1) {
    createDivBoxes += `<div style=' 
    background-color: ${getRandomHexColor()}; 
    width: ${30 + i * 10}px; 
    height: ${30 + i * 10}px;'></div>`;
  }
  return createDivBoxes;
  }
  

  function destroyBoxes() {
    boxesContainer.innerHTML = "";
  }

  
function handleCreate() {
    const amount = inputAmount.value;
    if (amount >= 1 && amount <= 100) {
      boxesContainer.insertAdjacentHTML('beforeend', createBoxes(inputAmount.value));
      inputAmount.value = ""; 
    } else {
      alert("Please enter a number between 1 and 100.");
    }
  }

  function handleDestroy() {
    destroyBoxes();
};


createButton.addEventListener("click", handleCreate);
destroyButton.addEventListener("click", handleDestroy);




