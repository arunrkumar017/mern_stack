const prompt = require("prompt-sync")();
let str = prompt("Enter any string : ");
function palindrome(str){
    let left=0, right=str.length-1;
    while(left<=right){
        if(str[left++]!=str[right--]){
            return console.log("not a valid palindrome");
        }
    }
    return console.log("valid palindrome");
}
palindrome(str);