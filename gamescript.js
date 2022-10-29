'use strict'

// Selecting elements
const player0Text = document.querySelector('.p0-text');
const player1Text =  document.querySelector('.p1-text');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const finalScore0 = document.getElementById('final--0');
const finalScore1 = document.getElementById('final--1');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
let playing, scores, activePlayer, currentScore;
// Starting conditions

const init = function(){
playing = true;
scores = [0, 0];
activePlayer = 0;
currentScore = 0;
diceEl.classList.add('hidden');
finalScore0.textContent = 0;
finalScore1.textContent = 0;
currentScore0.textContent = 0;
currentScore1.textContent = 0;
player0El.classList.remove('player-winner');
player1El.classList.remove('player-winner');
player0El.classList.add('player--active-p0');
player1El.classList.remove('player--active-p1');
player0Text.textContent = 'Player 1';
player1Text.textContent = 'Player 2';
}

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active-p0');
    player1El.classList.toggle('player--active-p1');  
}

const winnerStyle = function () {
    playing = false
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--active-p0');
    player1El.classList.remove('player--active-p1');
    player0El.style.borderTopLeftRadius = '75px';
    player0El.style.borderBottomLeftRadius = '75px';
    player1El.style.borderTopRightRadius = '75px';
    player1El.style.borderBottomRightRadius = '75px';
    document.querySelector(`.player--${activePlayer}`).classList.add('player-winner');
    if(scores[0] >= 100){
        player0Text.textContent = 'Player 1 Wins';
    } else if (scores[1] >= 100){
       player1Text.textContent = 'Player 2 Wins';
    }
}

init();

//Rolling dice functionality

btnRoll.addEventListener('click', function(){
    if(playing){
        const dice = Math.trunc(Math.random()*6)+ 1
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        if(dice !== 1){
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    };
});

// Hold button functionality
btnHold.addEventListener('click', function(){
    if(playing){
        scores[activePlayer] += currentScore;
        document.getElementById(`final--${activePlayer}`).textContent = scores[activePlayer];
        if(scores[activePlayer] >= 100){
            winnerStyle();
        } else {
            switchPlayer();
        }
    }
})

// Reset to default values
btnNew.addEventListener('click', init);