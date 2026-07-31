// determine ticket price based on conditions of age
const prompt = require("prompt-sync")();
let age = prompt("Enter your age : ");
if(age>0 && age<12){
    console.log("Ticket price = 5");
}else if(age>=12 && age<18){
    console.log("Ticket price = 10");
}else if(age>=18 && age<60){
    console.log("Ticket price = 20");
}else if(age>=60){
    console.log("Ticket price = 15");
}