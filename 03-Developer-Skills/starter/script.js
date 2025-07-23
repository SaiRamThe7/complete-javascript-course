// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//const { cloneElement } = require("react");

let a = 16;

console.log("a");
console.log("How are you ?");

//My challenge for My Self

//Need to find the max number using a function

const numbers = [3, 6, 24, 65, 753, 45, 85, 75, 24, 55, 54];
let maxNumber = Math.max(numbers); //numbers[0];
// const checkBiggestNumber = (input) => {
//   for (let i = 1; (i = input.length); i++) {
//     if (maxNumber > input[i]) {
//       maxNumber = input[i];
//     }
//   }
//   return maxNumber;
// };

//checkBiggestNumber(numbers);

console.log(maxNumber);
function zero(input) {
  return 0;
}
function one() {
  return 1;
}
function two() {
  return 2;
}
function three() {
  return 3;
}
function four() {
  return 4;
}
function five() {
  return 5;
}
function six() {
  return 6;
}
function seven() {
  return 7;
}
function eight() {
  return 8;
}
function nine() {
  return 9;
}

function plus() {
  return Math.operator("+");
}
function minus() {
  return "-";
}
function times() {
  return "*";
}
function dividedBy() {
  return "/";
}

console.log(5 + 2);
console.log(four(plus(five())));
