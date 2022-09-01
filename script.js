'use strict';
//selecting element
const score0el = document.querySelector('#score--0');
const score1el = document.getElementById('score--1');
const dieseel = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');

score1el.textContent = 0;
dieseel.classList.add('hidden');

//rolling dies functionality
