// determine a number is positive or negative
const prompt=require("prompt-sync")();
let num=prompt("Enter your number : ");
if(num>0){
    console.log("Number is positive");
}else if(num<0){
    console.log("Number is negative");
}else{
    console.log("Number is zero");
}