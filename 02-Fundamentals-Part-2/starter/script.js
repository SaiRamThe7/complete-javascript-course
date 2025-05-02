'use strict';

//SAIRAM:Code starts here

// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

const calcAverage = (a,b,c) => (a+b+c)/3 ;
//console.log(calcAverage(5,6,8));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
      console.log(`Dolphins win 🏆 the Game(${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
      console.log(`Koalas win 🏆 the Game (${avgKoalas} vs. ${avgDolphins})`);
    } else {
      console.log('No team wins...');
    }
  }


  checkWinner(scoreDolphins, scoreKoalas);


// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

//Arrays 

const fruit1 = 'Mango';
const fruit2 = 'JackFruit';
const fruit3 = 'Guava';
const fruit4 = 'Orange';

const fruits = ['Mango - 🥭','JackFruit','Guava ','Grapes - 🍇'];
console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);


//This adds apple at the inplace of array length 1 that is Jackfruit
fruits[1] = 'Apple - 🍏';
console.log(fruits);

//Example 2 :
fruits[3] = 'Pineapple - 🍍';
console.log(fruits);


var doorNum = '45/A15';
var streetName = 'Padmavathi Puram';
var villageName = 'Padmavathi Puram village';
var locality = 'Near Post Office';
var distirict = 'Tirupati';
var pinCode = '517507';
var state = 'Andhra Pradesh';

const address = [doorNum,streetName,villageName,locality,distirict,pinCode,state];
console.log(address);

console.log(`The Door Number for the Gven Address is ` +address[0]);


//Adding an Element 
//This will be added as extra fruit
const newLength = fruits.push('Dragon Fruit');
console.log(fruits);
console.log(newLength);


//unshift will beused to add the Element at first 
fruits.unshift('Banana 🍌');
console.log(fruits);

//Removal of Element 

//Removing the last element
fruits.pop();
console.log(fruits);


//Removing the first element
fruits.shift();
console.log(fruits);





