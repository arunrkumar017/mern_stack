// determine a year is leap year or not
const prompt = require("prompt-sync")();
let year = prompt("Enter any year : ");
if(year%4==0){
    console.log("year "+year+" is a leap year");
}else{
    console.log("year "+year+" is not a leap year");
}