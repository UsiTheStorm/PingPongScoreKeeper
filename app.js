const p1 = {
    score: 0,
    button: document.querySelector('.player1'),
    display: document.querySelector('#pl1'),
};
const p2 = {
    score: 0,
    button: document.querySelector('.player2'),
    display: document.querySelector('#pl2'),
};
const resetBtn = document.querySelector('.reset-btn');
const playTo = document.querySelector('.select');
let isGameOver = false;
let playToValue = parseInt(playTo.value, 10);

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('winner', 'looser');
        p.button.classList.remove('disabled');
    }
}

playTo.addEventListener('change', () => {
    playToValue = parseInt(playTo.value, 10);
    reset();
});

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        player.display.textContent = player.score;
        if (player.score === playToValue) {
            isGameOver = true;
            player.display.classList.add('winner');
            player.button.classList.add('disabled');
            opponent.display.classList.add('looser');
            opponent.button.classList.add('disabled');
        }
    }
}

p1.button.addEventListener('click', () => {
    updateScore(p1, p2);
});

p2.button.addEventListener('click', () => {
    updateScore(p2, p1);
});

resetBtn.addEventListener('click', () => {
    reset();
});
