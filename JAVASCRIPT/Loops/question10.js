//Number guess game
const prompt = require("prompt-sync")();
let secretNumber = prompt("Enter secret number : ");
let found = false;
while(!found){
    let guess = prompt("Enter your guess number : ");
    if(guess === secretNumber){
        console.log("Your guessed number is correct");
        found = true;
        break;
    }else if(guess > secretNumber){
        console.log("Your guessed number is higher than the secretNumber");
    }else{
        console.log("Your guessed number is lower than the secretNumber");
    }
}