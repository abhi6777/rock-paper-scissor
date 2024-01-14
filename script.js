// Step 1 of challenge
// create git repo  ->  Done

// Step 2 of challenge
// create blank html and js file   ->  Done

// Step 3 of challenge

// create function called getComputerChoice
function getComputerChoice() {

     // randomly return among "Rock" , "Paper", "scissor"
     let choice = ["rock", "paper", "scissor"];
     let random = Math.floor(Math.random() * choice.length);
     let computerSelection = choice[random];
     return computerSelection;
}

// Step 3 -> Done

// Step 4 of Challenge

// write a function which plays a single round of game called playRound
// function should take two parameters playersSelection and computerSelection
// returns a string which declare the winner like "You Lose! Paper beats Rock" or win 
// remember the input will be case insensitive 

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

// This game would be 5 round
// Ties will be done replaying the round

// Step 4 ->  Done (partially)


// Step 5 of challenge

// check that play function working properly instead of console.log(message) you have to put return message;

// step 5 ->  Done

// Step 6 of challenge\

// write a new function called game() 
// use previous function to play best of 5
// Keep score and report winner or looser at the end 

function game() {
     let play5 = 5;
     let playerScore = 0;
     let computerScore = 0;
     
     for (let index = 0; index < play5; index++) {
          let playerChoice = prompt("Choose your choice among Rock, Paper, and Scissor");
          playerChoice = playerChoice.toLowerCase();
          const validChoices = ["rock", "paper", "scissor"];
          // validating the input is correct or not
          if (!validChoices.includes(playerChoice)) {
               let message = "Give correct input from among all the listed choice";
               // console.log(message);
               return message;
          }

          let computerChoice = getComputerChoice();

          let result = play(playerChoice, computerChoice);   
          console.log(result);

          // Adding scores after winning 
          if (result.includes("Won")) {
               playerScore++;
          } else if (result.includes("Lose")) {
               computerScore++;
          } else if (result.includes("Tie")) {
               // if tie happens the rematch happens
               index--;
          }
     }

     // message after winning someone in best of 5
     if (playerScore < computerScore) {
          let message = "Computer wins"

          return message;
     } else if (computerScore < playerScore) {
          let message = "Player wins"

          return message;
     }

}

