//detremine a number is even or odd
const prompt = require("prompt-sync")();
let num = prompt("Enter your number : ");
if(((num/2)*2)===num){ // alternate condition num%2 == 0  
    console.log("Number is Even");
}else{
    console.log("Number is Odd");
}
