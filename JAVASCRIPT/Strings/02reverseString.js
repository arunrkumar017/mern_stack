const prompt = require("prompt-sync")();
let str = prompt("Enter any string : ");
function reverseString(str){
    let arr = str.split("");
    let left=0, right=arr.length-1,temp;
    while(left<right){
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return(console.log("Reversed string is : " + arr.join("")));

}
reverseString(str);


// function reverseString(str) {
//     return str.split("").reverse().join("");
// }

// console.log(reverseString(str));