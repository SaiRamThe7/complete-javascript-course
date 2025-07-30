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
    console.log(`maxNumber`);
  }
  console.log(maxNumber);
  console.log(minNumber);
  return [maxNumber, minNumber];
};

var [maxNumber, minNumber] = checkBiggestNumber([4, 53, 64, 798, 34, 534, 56]);

console.log(
  `The max number is ${maxNumber} and minimum number is ${minNumber}`
);

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

console.log("The code starts here ");

const printForecast = function (input) {
  let c = 1;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === undefined || typeof input[i] !== "number") {
      console.error(`The Temparatures should be only number`);
    }
    console.log(`...${input[i]}\u00b0C  in ${c} days`);
    c++;
  }
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, "ahdj"]);
