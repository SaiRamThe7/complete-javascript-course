'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//console.log(btnsOpenModal);

const unhide = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('overlay');
};

const hide = function () {
  modal.classList.add('hidden');
  overlay.classList.add('overlay');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', unhide); //in here hide function not needed ()
  btnCloseModal.addEventListener('click', hide);
  //   console.log(btnsOpenModal[[i]]);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      hide();
    }
  });
}
