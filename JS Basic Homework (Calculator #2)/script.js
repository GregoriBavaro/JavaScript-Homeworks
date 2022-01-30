'run strict';

// Modal
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnOpenModal = document.querySelector('.show-modal');
let btnCloseModal = document.querySelector('.close-modal');
let btnResizeModal = document.querySelector('.resize-modal');
let modalBody = document.querySelector('.modal-body');

// Closing modal

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// Opening modal

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

// Closing modal with ESC Key

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Fullscreen option

function getFullScreenElement() {
    return (
        document.fullscreenElement ||
        document.webkitFullScreenElement ||
        document.mozFullscreenElement ||
        document.msFullscreenElement
    );
}

function toggleFullscreen() {
    if (getFullScreenElement()) {
        document.exitFullscreen();
    } else {
        document
            .querySelector('.modal')
            .requestFullscreen()
            .catch(e => {
                resizeModal;
            });
    }
}

btnResizeModal.addEventListener('click', () => {
    toggleFullscreen();
});

// Calculator

// Variables
let input = document.querySelector('.input');
let answer = document.querySelector('.answer');
let buttons = document.querySelectorAll('button');
let btnErase = document.querySelector('#erase');
let btnClear = document.querySelector('#clear');
let result = document.querySelector('#evaluate');
let keyButtons = document.querySelector('.key-btns');
let displayCalculations = document.querySelector('#display-calculations');

// Calculator

// storing values for display in an Array
let screenValue = [];

// The Clear function

btnClear.addEventListener('click', () => {
    screenValue = [''];
    answer.innerHTML = '';
    input.className = 'input';
    answer.className = 'answer';
    answer.style.fontSize = '50px';
    answer.style.fontWeight = 'bold';
});

// Event listener for each button

buttons.forEach(item => {
    item.addEventListener('click', () => {
        if (!item.id.match('erase')) {
            screenValue.push(item.value);
            input.innerHTML = screenValue.join('');

            if (item.classList.contains('number')) {
                answer.innerHTML = eval(screenValue.join(''));
            }
        }

        if (item.id.match('erase')) {
            screenValue.pop();
            input.innerHTML = screenValue.join('');
            answer.innerHTML = screenValue.join('');
        }

        if (item.id.match('equal')) {
            input.className = 'answer';
            answer.className = 'input';
            answer.style.color = 'black';
        }
    });
});