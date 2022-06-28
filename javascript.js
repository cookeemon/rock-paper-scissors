let computerMoveNum = Math.floor(Math.random() * 3);
let computerMove = '';
let playerMove = '';

let computerPlay = () => {
    if(computerMoveNum == 1) {
        computerMove = 'ROCK'
    }
    else if (computerMoveNum == 2) {
        computerMove = 'PAPER'
    }
    else {
        computerMove = 'SCISSORS'
    }
    computerMoveNum = Math.floor(Math.random() * 3);
};

let playRound = (playerMove, computerMove) => {
    while(true) {
        playerMove = prompt('Choose your weapon: ROCK, PAPER, or SCISSORS?');
        playerMove = playerMove.toUpperCase(); 
        if(playerMove == 'ROCK' || playerMove == 'PAPER' || playerMove == 'SCISSORS') {
            break;
        }
        else
            console.log('Invalid entry. Please type: ROCK, PAPER, or SCISSORS.');
    }

    if (computerMove === playerMove) {
        return 'It\'s a draw!';
    }
    else if (computerMove === 'ROCK' && playerMove === 'PAPER') {
        return 'You win with PAPER!';
    }
    else if (computerMove === 'PAPER' && playerMove === 'SCISSORS') {
        return 'You win with SCISSORS!';
    }
    else if (computerMove === 'SCISSORS' && playerMove === 'ROCK') {
        return 'You win with ROCK!';
    }
    else {
        return `You lose! The computer chose ${computerMove}.`;
    }
};  

let game = () => {
    for (let i = 0; i < 5; i++) {
        computerPlay();
        console.log(playRound(playerMove, computerMove));
    }
}

game();