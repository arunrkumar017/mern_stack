// determine greater of two numbers
const prompt = require("prompt-sync")();
let num1 = prompt("Enter 1st number : ");
let num2 = prompt("Enter 2st number : ");
if(num1>num2){
    console.log("1st number is greater");
}else if(num2>num1){
    console.log("2nd number is greater");
}else{
    console.log("both number are same");
}