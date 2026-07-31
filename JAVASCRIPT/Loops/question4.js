//transformation of numerical grade into letter grade
const prompt = require("prompt-sync")();
let numGrade = prompt("Enter your numerical grade : ");
if(numGrade>90 && numGrade<=100){
    console.log("Your letter grade is A");
}else if(numGrade>80 && numGrade<=90){
    console.log("Your letter grade is B");
}else if(numGrade>70 && numGrade<=80){
    console.log("Your letter grade is C");
}else if(numGrade>60 && numGrade<=70){
    console.log("Your letter grade is D");
}else if(numGrade>50 && numGrade<=60){
    console.log("Your letter grade is E");
}else{
     console.log("Your letter grade is F and you failed in exam");
}