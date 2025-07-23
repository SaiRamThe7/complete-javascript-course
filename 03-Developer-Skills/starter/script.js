// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const { cloneElement } = require("react");

let a = 16;

console.log("a");
console.log("How are you ?");

//My challenge for My Self

//Need to find the max number using a function

const numbers = [3, 6, 24, 65, 753, 45, 85, 75, 24, 55, 54];
let maxNumber = Math.max(numbers); //numbers[0];
const checkBiggestNumber = (input) => {
  for (let i = 1; (i = input.length); i++) {
    if (maxNumber > input[i]) {
      maxNumber = input[i];
    }
  }
  return maxNumber;
};

checkBiggestNumber(numbers);

console.log(maxNumber);
