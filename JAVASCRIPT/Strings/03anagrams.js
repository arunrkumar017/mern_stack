const prompt = require("prompt-sync")();
let str1 = prompt("Enter first string : ");
let str2 = prompt("Enter second string : ");

function checkAnagram(str1,str2){
    if(str1.length !== str2.length){
        return false;
    }
    let sortedStr1 = str1.split("").sort().join("");
    let sortedStr2 = str2.split("").sort().join("");
    return sortedStr1 === sortedStr2;
}   
checkAnagram(str1,str2) ? console.log("The strings are anagrams") : console.log("The strings are not anagrams");