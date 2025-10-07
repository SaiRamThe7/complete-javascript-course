'use strict';
const score0 = document.getElementById('current--0');
const score1 = document.getElementById('current--1');
const playerScore0 = document.getElementById('score--0');
const playerScore1 = document.getElementById('score--1');
const diceIMG = document.querySelector('.dice');

const number = function () {
  return Math.trunc(Math.random() * 6) + 1;
};
const rolldice = document.querySelector('.btn--roll');

playerScore0.textContent = 0;
playerScore1.textContent = 0;
diceIMG.classList.add('hidden');
//console.log(number);
let scoreboard = 0;

//clicking on roll dice function
rolldice.addEventListener('click', function () {
  let numbers = number();
  console.log(numbers);

  //Making the image to be shown
  diceIMG.classList.remove('hidden');

  //showing the dice number image
  diceIMG.src = `dice-${numbers}.png`;

  //score need to be shown for the player
  if (numbers != '0') {
    scoreboard += numbers;
    score0.textContent = scoreboard;
  } else {
    scoreboard = 0;
    scoreboard += numbers;
    score1.textContent = scoreboard;
  }
});

//Hold button functionality

const hold = document.querySelector('.btn--hold');
hold.addEventListener('click', function () {});
