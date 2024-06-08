const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const inputValue = textInput.value.trim();
  
  if (inputValue) {
    output.textContent = event.currentTarget.value.trim();
  } else {
    output.textContent = "Anonymous";
    }
});