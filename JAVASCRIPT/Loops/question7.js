//Determine discount on basis of purchase amount

const prompt = require("prompt-sync")();
let purchaseAmount = prompt("Enter purchase amount : ");
if(purchaseAmount>=100){
    console.log("Discount on purchase = 20");
}else if(purchaseAmount>=50 && purchaseAmount<100){
    console.log("Discount on purchase = 10");
}else{
    console.log("Discount on purchase = 0");
}