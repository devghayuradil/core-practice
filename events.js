const button = document.querySelector(".btn");
const card = document.querySelector(".card");
const cardBody = document.querySelector(".card-body");

button.addEventListener("click", (e) => {
  alert("Button Clicked!");
});

card.addEventListener("click", () => {
  alert("Card Clicked!");
});

cardBody.addEventListener(
  "click",
  () => {
    alert("Card Body Clicked!");
  },
  {
    capture: true,
  },
);


const products = document.querySelector(".products");

products.addEventListener("click", (e) => {
    console.log(e.target.textContent);
 });