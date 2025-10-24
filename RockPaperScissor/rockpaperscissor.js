

function getComputerChoice(){
    let randomNum = Math.random();
    if(randomNum < 0.3) 
            return "rock";
    else if( randomNum < 0.6)
            return "paper";
    else 
            return "scissor";
    
}
const playGame = document.querySelector("#playGame");
const log = document.querySelector("#score");
const gameContainer = document.querySelector('#btn-container');

let scoreHuman = 0;
let scoreComp = 0;

playGame.addEventListener('click', () => {
     log.innerHTML = '';
    gameContainer.classList.toggle('hidden');
    playGame.classList.add('hidden');
});

function playRound( humanChoice){
    updateScore(humanChoice.toLowerCase());
}

function updateScore(humanChoice){
    let compChoice = getComputerChoice();

    if(humanChoice == 'rock'){
        switch(compChoice){
            case 'rock':
                scoreHuman++;
                break;
            case 'paper':
                scoreComp++;
                break;
            default:
                scoreHuman++;
                break
        }
    } else if(humanChoice == 'scissor'){
        switch(compChoice){
            case 'rock':
                scoreComp++;
                break;
            case 'paper':
                scoreHuman++;
                break;
            default:
                scoreHuman++;
                break
        }
    } else {
        switch(compChoice){
            case 'rock':
                scoreHuman++;
                break;
            case 'paper':
                scoreHuman++;
                break;
            default:
                scoreComp++;
                break
        }
    }

    log.innerHTML="Computer: " + scoreComp + " You: " + scoreHuman + '.' + (scoreComp >= 5 ? 'Computer has won.' : 
                            (scoreHuman >= 5 ? 'You have won!' : ''));

    if(scoreHuman >= 5 || scoreComp >= 5){
        scoreHuman = 0;
        scoreComp = 0;
        gameContainer.classList.toggle('hidden');
        playGame.innerHTML= 'Play Again';
        playGame.classList.remove('hidden');
    }
}

const rockButton = document.querySelector('#rockBtn');
const paperButton = document.querySelector('#paperBtn');
const scissorButton = document.querySelector('#scissorBtn');
rockButton.addEventListener('click', ()=>{
    playRound('Rock');
});
paperButton.addEventListener('click', ()=>{
    playRound('Paper');
});
scissorButton.addEventListener('click', ()=>{
    playRound('Scissor');
});