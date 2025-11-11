'use strict';

//selecting the elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const playername1 = document.getElementById('name--0');
const playername2 = document.getElementById('name--1');

const score0 = document.getElementById('current--0');
const score1 = document.getElementById('current--1');
const playerScore0 = document.getElementById('score--0');
const playerScore1 = document.getElementById('score--1');
const diceIMG = document.querySelector('.dice');
const newgame = document.querySelector('.btn--new');

let scoreboard = 0;
let playing = true;
const scores = [0, 0];
let currentScore = 0;
var activePlayer = 0;

//.switching player function
const SwitchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; //here i have used let again for the same variable and its giving syntax error
  scoreboard = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

//Generating a random number function
const number = function () {
  return Math.trunc(Math.random() * 6) + 1;
};
const rolldice = document.querySelector('.btn--roll');

playerScore0.textContent = 0;
playerScore1.textContent = 0;
diceIMG.classList.add('hidden');

//clicking on roll dice function
rolldice.addEventListener('click', function () {
  if (playing == true) {
    if (
      playername1.textContent === 'Player 1' &&
      playername2.textContent === 'Player 2'
    ) {
      alert('Please enter player names to start the game');

      let player1name = prompt('Please Player 1 name:');
      let player2name = prompt('Please Player 2 name:');

      if (player1name === null || player2name === null) {
        console.log('User cancelled the prompt.');
      } else if (player1name === '' || player2name === '') {
        console.log('User entered no input.');
      }

      playername1.textContent = player1name;
      playername2.textContent = player2name;

      return;
    }

    let numbers = number();
    console.log(numbers);

    //Making the image to be shown
    diceIMG.classList.remove('hidden');

    //showing the dice number image
    diceIMG.src = `dice-${numbers}.png`;

    //score need to be shown for the player
    if (numbers != '1') {
      scoreboard += numbers;
      document.getElementById(`current--${activePlayer}`).textContent =
        scoreboard;
    } else {
      SwitchPlayer();
    }
  }
});

//Hold button functionality

const hold = document.querySelector('.btn--hold');
hold.addEventListener('click', function () {
  //Adding code changes for the hold button

  //1.Add current score to active players score
  scores[activePlayer] += scoreboard;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  //2.check if th eplayers score is greater or equal to 100
  if (scores[activePlayer] >= 20) {
    playing = false;
    diceIMG.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    diceIMG.classList.add('hidden');
    //here is actibve player wins
  } else {
    //switch to the next player
    SwitchPlayer();
  }
});

newgame.addEventListener('click', function () {
  //alert('New Game Started');
  score0.textContent = 0;
  score1.textContent = 0;
  playerScore0.textContent = 0;
  playerScore1.textContent = 0;
  player0.classList.remove('player--winner');
  player1.classList.remove('player-winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  diceIMG.classList.add('hidden');
  playing = true;
  playername1.textContent = 'Player 1';
  playername2.textContent = 'Player 2';
});
