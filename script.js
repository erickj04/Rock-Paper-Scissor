const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const userBoard = document.querySelector('.user');
const compBoard = document.querySelector('.comp');
const result = document.querySelector('.result');
const newGameBtn = document.querySelector('.newGameBtn');
let  stopGame = false;

function random(){
    let rand = Math.floor(Math.random()*3) + 1;
    if(rand == 1)return "rock";
    else if(rand == 2)return "paper";
    return "scissor";
}

function changeChoice(x){
    if(!stopGame){
        userChoose = x;
        let compChoose = random();
        updateScore(userChoose, compChoose);
    }
}

function updateScore(user, comp){
    if(user == comp)result.textContent = 'DRAW';
    else if(user == "rock" && comp == "paper" || user == "paper" && comp == "scissor" || user == "scissor" && comp == "rock"){
        compScore++;
        result.textContent = 'LOSE';
    }
    else {
        userScore++;
        result.textContent = 'WIN';
    }
    userBoard.textContent = `You: ${userScore}`;
    compBoard.textContent = `Comp: ${compScore}`;
    if(userScore == 5 || compScore == 5){
        stopGame = true;
        const para = document.createElement("p");
        userScore == 5 ? para.innerText = "YOU WIN" : para.innerText = "YOU LOSE";
        document.body.appendChild(para);
    }
}

function reset(){
    location.reload();
}

let userChoose;
let userScore = 0;
let compScore = 0;

rock.addEventListener('click', () => changeChoice("rock"));
paper.addEventListener('click', () => changeChoice("paper"));
scissor.addEventListener('click', () => changeChoice("scissor"));
newGameBtn.addEventListener('click', () => reset());