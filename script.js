'use strict';
//selecting element
const score0el = document.querySelector('#score--0');
const score1el = document.getElementById('score--1');
const dieseel = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold')(
//   (score0el.textContent = 0)
// );
//starting condition
score0el.textContent = 0;
score1el.textContent = 0;
dieseel.classList.add('hidden');

//rolling dies functionality
btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //display dice
  dieseel.classList.remove('hidden');
  dieseel.src = `dice-${dice}.png`;
});
