const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const button = document.getElementById("btn");
const output = document.getElementById("output");

// helper function to create delay
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// async function to handle click
async function showMessage() {
  const text = textInput.value;
  const delay = Number(delayInput.value);

  output.innerText = ""; // clear output

  await wait(delay);     // wait for given time

  output.innerText = text; // show message after delay
}

button.addEventListener("click", showMessage);
