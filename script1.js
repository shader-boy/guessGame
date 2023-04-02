'use strict'

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
const displayNumber = function(number) {
    document.querySelector('.number').textContent = number;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess); 

    // When there's no value
    if(!guess) {
        displayMessage('No number!');

        //When it's true
    } else if (guess === secretNumber) {

        displayMessage('Correct Number!')
        displayNumber(secretNumber)
        document.querySelector('.highscore').textContent = score
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        score > highScore ? highScore = score : highScore;
        document.querySelector('.highscore').textContent = highScore;

        // When guess is wrong
    }   else if (guess !== secretNumber) {
        if(score > 1) {

            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            score--;
            document.querySelector('.score').textContent = score
        } else {
            displayMessage('You lost the game!')
            document.querySelector('.score').textContent = 0
        }    
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    displayNumber('?');
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
