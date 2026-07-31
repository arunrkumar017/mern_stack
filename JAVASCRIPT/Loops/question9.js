//Determine body mass index(bmi)
const prompt = require("prompt-sync")();
let weight = prompt("Enter your weight in kilogram : ");
let height = prompt("Enter your height in meter : ");
let bmi = weight/(height*height);
console.log("BMI = "+ bmi)