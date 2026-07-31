// determine minor or major
const prompt = require("prompt-sync")();
let age = prompt("Enter your age : ");
if(age >= 18){
    console.log("You are adult.");
    console.log("You are allowed to vote.");
    console.log("You are allowed to drive.");
}else{
    console.log("You are minor.");
    console.log("You are not allowed to vote.");
    console.log("You are not allowed to drive.");
}