"use script";

const num = document.querySelector(".number");

let number = 0;

let color = function () {
  if (number == 0) {
    num.style.color = "Black";
  } else if (number > 0) {
    num.style.color = "Blue";
  } else {
    num.style.color = "Red";
  }
};
document.querySelector(".decrement-btn").addEventListener("click", function () {
  num.textContent = --number;
  color();
});

document.querySelector(".increment-btn").addEventListener("click", function () {
  num.textContent = ++number;
  color();
});
document.querySelector(".reset-btn").addEventListener("click", function () {
  num.textContent = 0;
  number = 0;
  num.style.color = "Black";
});
