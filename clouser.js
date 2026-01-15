// const a = () => {
//   let n = 0;
//   return () => {
//     console.log(n++);
//   };
// }
// let c = a();
// c();

// function a() {
//   for (var index = 1; index <= 5; index++) {
//     function close(x) {
//       setTimeout(function () {
//         console.log(x);
//       }, x * 1000);
//     }
//     close(index);
//   }
// }

// a();

let inputOne = document.getElementById("inputOne");
let inputTwo = document.getElementById("inputTwo");
let additionButton = document.getElementById("additionButton");
let subButton = document.getElementById("subButton");
let result = document.getElementById("result");


function add(a,b) {
  return a + b;
}
function sub(a,b) {
  return a - b;
}

additionButton.addEventListener("click", () => {
  result.innerHTML = add(Number(inputOne.value), Number(inputTwo.value));
});
subButton.addEventListener("click", () => {
  result.innerHTML = sub(Number(inputOne.value), Number(inputTwo.value));
});
