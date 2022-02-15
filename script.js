"use strict";

const totalParagraph = document.querySelector(".total");
// const totalParagraph = document.querySelector(".total");
// const colaBtn = document.querySelector(".cola");
// const peanutBtn = document.querySelector(".peanuts");
// const chocolateBtn = document.querySelector(".chocolate");
// const fruitBtn = document.querySelector(".fruit");
const snackButtons = document.querySelectorAll(".snack-button");
let total = 0;

console.dir(totalParagraph);

// console.dir(totalParagraph);

// colaBtn.addEventListener("click", () => {
//   total += 2;
//   totalParagraph.textContent = `total: $${total.toFixed(2)}`;
//   console.log(total);
// });
// peanutBtn.addEventListener("click", () => {
//   total += 3;
//   totalParagraph.textContent = `total: $${total.toFixed(2)}`;
//   console.log(total);
// });
// chocolateBtn.addEventListener("click", () => {
//   total += 4;
//   totalParagraph.textContent = `total: $${total.toFixed(2)}`;
//   console.log(total);
// });
// fruitBtn.addEventListener("click", () => {
//   total += 6;
//   totalParagraph.textContent = `total: $${total.toFixed(2)}`;
//   console.log(total);
// });

// snackButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const cost = button.getAttribute("data-cost");
//     total += parseInt(cost);
//     console.log(total);
//     totalParagraph.textContent = `Total: $${total.toFixed(2)}`;
//   });
// });

// const formContainer = document.querySelector(".form");
// const coinOpt = document.querySelector(".coinOpt");
// const makerContainer = document.querySelector(".maker-container");

// formContainer.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let name = document.querySelector("#number").
// });

// const addCoins = () => {
//   const newCoin = document.createElement("div");
//   const coinAmmount = document.createTextNode("coinOpt.value");
//   newCoin.appendChild(coinAmmount);
// };

const form = document.querySelector(".two form");
const bank = document.querySelector(".bank");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const howMany = document.querySelector("#howMany").value;
  const whichCoin = document.querySelector("#whichCoin").value;
  for (let i = 0; i < howMany; i++) {
    const newCoin = document.createElement("div");
    newCoin.classList.add("coin", whichCoin);
    newCoin.textContent = whichCoin;
    bank.append(newCoin);
  }
});
