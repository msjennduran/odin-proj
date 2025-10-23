console.log("Hi from in rock paper scissor");

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

let scoreHuman = 0;
let scoreComp = 0;

playGame.addEventListener('click', () => {
    playRound();
});

function playRound(){
    let round = 1;
    do{
    let humanChoice = prompt('Rock, Paper, or Scissor?');
        
    if(humanChoice == "Rock"){
        console.log('you choose rock');
    }else if(humanChoice == "Paper"){
        console.log('you choose paper');
    } else if(humanChoice == "Scissor"){
        console.log('you choose scissor');
    }

    updateScore(humanChoice.toLowerCase());
    round++;
    }
    while(round <= 5)
   
}

function updateScore(humanChoice){
    let compChoice = getComputerChoice();

    if(humanChoice == 'rock'){
        switch(compChoice){
            case 'rock':
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
                break
        }
    } else {
        switch(compChoice){
            case 'rock':
                scoreHuman++;
                break;
            case 'paper':
                break;
            default:
                scoreComp++;
                break
        }
    }

    log.innerHTML="Computer: " + scoreComp + " You: " + scoreHuman + '';
}

