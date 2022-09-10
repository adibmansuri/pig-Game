'use strict';
//selecting element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0el = document.querySelector('#score--0');
const score1el = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const dieseel = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
//   (score0el.textContent = 0)
// );
//starting condition
score0el.textContent = 0;
score1el.textContent = 0;
dieseel.classList.add('hidden');

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchplayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
//rolling dies functionality
btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //display dice
  dieseel.classList.remove('hidden');
  dieseel.src = `dice-${dice}.png`;

  //if 1
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore += dice;
    switchplayer();
  }
});
btnHold.addEventListener('click', function () {
  //add curent score toactive player score
  score[activePlayer] += currentScore;
  // scores[1] = scores[1] + currentScore

  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];
  //check if score is <=100
  //finish the game if >100
  //if not switch to next player
  switchplayer();
});
