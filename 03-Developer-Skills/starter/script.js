// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//const { cloneElement } = require("react");

let a = 16;

console.log("a");
console.log("How are you ?");

//My challenge for My Self

//Need to find the max number using a function
var maxNumber;
var minNumber;

const checkBiggestNumber = function (input) {
  let maxNumber = input[0];
  let minNumber = input[0];

  for (let i = 1; i < input.length; i++) {
    if (maxNumber < input[i]) maxNumber = input[i];
    if (minNumber > input[i]) minNumber = input[i];
  }
  console.log(maxNumber);
  console.log(minNumber);
  return [maxNumber, minNumber];
};

var [maxNumber, minNumber] = checkBiggestNumber([4, 53, 64, 798, 34, 534, 56]);

console.log(
  `The max number is ${maxNumber} and minimum number is ${minNumber}`
);
