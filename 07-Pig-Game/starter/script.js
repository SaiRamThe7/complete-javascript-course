'use strict';
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const diceIMG = document.querySelector('.dice');
const number = function () {
  return Math.trunc(Math.random() * 6) + 1;
};
const rolldice = document.querySelector('.btn--roll');

score0.textContent = 0;
score1.textContent = 0;
diceIMG.classList.add('hidden');
//console.log(number);

rolldice.addEventListener('click', function () {
  let numbers = number();
  console.log(numbers);
  diceIMG.classList.remove('hidden');
  diceIMG.src = `dice-${numbers}.png`;
});
