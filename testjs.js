const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");
const clear = document.getElementById("clear");
const zoomBtn = document.querySelector(".zoom-btn")
const app = document.querySelector(".calculator")

let answer = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    result.textContent += e.target.id;
  });
});

equal.addEventListener("click", () => {
  result.textContent = eval(result.textContent);
});

clear.addEventListener("click", () => {
  result.textContent = "";
});

zoomBtn.addEventListener("click", () => {
  app.classList.toggle("big-calculator")
  result.classList.toggle("big-result")
})