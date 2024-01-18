
function getComputerChoice() {
     let choice = ["rock", "paper", "scissor"];
     let random = Math.floor(Math.random() * choice.length);
     let computerSelection = choice[random];
     return computerSelection;
}

function play(playersSelection, computerSelection) {
     let computer = computerSelection.toLowerCase();
     let player = playersSelection.toLowerCase();
     let message = "";

     if(computer == player){
          message = "Tie";
     }
     else if(player == "rock") {
          if(computer == "scissor"){
               message = "You Lose! Rock beats Scissor";
          } else{
               message = "You Won! Rock beats Scissor";
          }
     }
     else if(player == "paper") {
          if(computer == "rock"){
               message = "You Won! Paper beats Rock";
          } else{
               message = "You Lose! Paper beats Rock";
          }
     }
     else if(player == "scissor") {
          if(computer == "paper"){
               message = "You Won! Scissor beats Paper";
          } else{
               message = "You Lose! Scissor beats Paper";
          }
     }

     return message;
}


const container = document.querySelector("#container");
container.style.color = "white"

let btn1 = document.createElement("button");
btn1.id = "btnId1";
btn1.textContent = "Rock";
let btn2 = document.createElement("button");
btn2.id = "btnId2";
btn2.textContent = "Paper";
let btn3 = document.createElement("button");
btn3.id = "btnId3";
btn3.textContent = "Scissor";

container.appendChild(btn1);
container.appendChild(btn2);
container.appendChild(btn3);

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
     button.addEventListener("click", () => {
          const playersSelection = button.textContent;
          const computerSelection = getComputerChoice();
          const result = play(playersSelection, computerSelection);
          resultString.textContent = result;
          scoreAdd();
     });
});

const resultString = document.createElement("div");
resultString.id = "result";
container.appendChild(resultString);


const runningScore = document.createElement("div");
runningScore.id = "score";
container.appendChild(runningScore);

let playerScore = 0;
let computerScore = 0;

const playerCount = document.createElement("p");
playerCount.innerHTML = "Player Score: "+ playerScore;
runningScore.appendChild(playerCount);

const computerCount = document.createElement("p");
computerCount.innerHTML = "Computer Score: "+ computerScore;
runningScore.appendChild(computerCount);

const resultShow = document.createElement("p");
const resultScore = document.createElement("p");
resultShow.id = "resultShow";
resultScore = "resultScore";


function scoreAdd() {
     if (resultString.textContent.includes("Won")) {
          playerScore++;
     } else if (resultString.textContent.includes("Lose")) {
          computerScore++;
     }

     if (computerScore >= 5) {
          resultShow.innerHTML = " Computer wins " ;
          resultScore.innerHTML = " Players Score: " + playerScore + " Computer score: " + computerScore ;
          playerScore = 0;
          computerScore = 0;
          container.appendChild(resultShow);
          container.appendChild(resultScore);
      } else if (playerScore >= 5) {
          resultShow.innerHTML = " Player Wins " ;
          resultScore.innerHTML = " Computer score: " + computerScore + " Players Score: " + playerScore ;
          playerScore = 0;
          computerScore = 0;
          container.appendChild(resultShow);
          container.appendChild(resultScore);
      }

     playerCount.innerHTML = "Player Score: " + playerScore;
     computerCount.innerHTML = "Computer Score: " + computerScore;
}


