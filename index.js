var player1 = 'X';
var player2 = 'O';

var currentTurn = 1;
var movesMade = 0;

var winnerContainer = $('.winner');

var box = $('.box');


box.on('click', (event) => {
    movesMade++;

    if (currentTurn % 2 === 1) {
        event.target.innerHTML = player1;
        event.target.style.color = "#3269c1";
        currentTurn++;
    } else {
        event.target.innerHTML = player2;
        event.target.style.color = "#b5b722";
        currentTurn--;
    }

    if (checkForWinner()) {
        theWinner = currentTurn == 1 ? player2 : player1;
        declareWinner(theWinner);
    }
});

function refreshPage(){
    window.location.reload();
} 

function declareWinner(winner) {
    winnerContainer.css('display', "block");
    winner = winner === player1 ? 'X' : 'O';
    winnerContainer.html(winner + " is the winner!");
}

function checkForWinner() {
    if (movesMade > 4) {
        var box = $('.box');
        var moves = Array.prototype.slice.call($(".box"));
        var results = moves.map(function(box) { return box.innerHTML; });
        var winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        return winningCombos.find(function(combo) {
            if (results[combo[0]] !== "" && results[combo[1]] !== "" && results[combo[2]] !== "" && results[combo[0]] === results[combo[1]] && results[combo[1]] === results[combo[2]]) {
                return true;
            } else {
                return false;
            }
        });
    }
}

