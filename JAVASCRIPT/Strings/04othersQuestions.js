//Q4 Find the Longest Word
let str = "I am learning JavaScript";
let words = str.split(" ");
let longest = words[0];

for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
        longest = words[i];
    }
}
console.log(longest);

//Q5 Count Number of Words
let str1 = "I am learning JavaScript";
let words1 = str1.split(" ");
console.log(words1.length);

//Q6 Capitalize First Letter of Each Word
let str2 = "hello world";
let words2 = str2.split(" ");
let result = "";

for (let word of words2) {
    result = result + word[0].toUpperCase() + word.slice(1) + " ";
}
console.log(result);

//Q7 Count Vowels
let str3 = "hello world";
let count = 0;

for (let char of str3) {
    if ("aeiou".includes(char.toLowerCase())) {
        count++;
    }
}
console.log(count);

//Q8 Count How Many Times a Substring Occurs
let str4 = "hello hello hello";
let word = "hello";
let count1 = str4.split(word).length - 1;
console.log(count1);

//Q9 Compress a String
function compressString(str) {
    let result = "";
    let count2 = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count2++;
        } else {
            result = result + str[i] + count2;
            count2 = 1;
        }
    }
    return result;
}
console.log(compressString("aaabbbccc"));

//Q10 Count Occurrences of Each Letter
let str5 = "hello";
let count3 = {};

for (let char of str5) {
    if (count3[char]) {
        count3[char]++;
    } else {
        count3[char] = 1;
    }
}
console.log(count3);

//Q11 Check Character Position
let str6 = "hello";
let char = "l";

console.log(str6.indexOf(char));


//Q12 Check String Ending
function checkEnding(str, target) {
    return str.toLowerCase().endsWith(target.toLowerCase());
}
console.log(checkEnding("JavaScript", "script"));

//Without using endsWith()
function checkEnding(str, target) {
    let lastPart = str.slice(str.length - target.length);
    return lastPart.toLowerCase() === target.toLowerCase();
}
console.log(checkEnding("JavaScript", "script"));

//Q13 Replace Specific Word
function replaceWord(originalString, targetWord, newWord) {
    return originalString.replaceAll(targetWord, newWord);
}
console.log(
    replaceWord("I like JavaScript. JavaScript is easy.", "JavaScript", "Java")
);

//Q14 Remove Whitespace from Both Ends
function removeWhitespace(str) {
    return str.trim();
}
console.log(removeWhitespace("  hello world  "));

//Q15 Extract First N Characters
function extractFirstN(str, n) {
    return str.slice(0, n);
}
console.log(extractFirstN("Developer", 4));

//Q16 Mask Last 4 Digits
function maskString(str) {
    let stars = "#".repeat(str.length - 4);
    return stars + str.slice(-4);
}
console.log(maskString("1234567890"));

//Q17 Check if String Contains a Word
function containsWord(sentence, word) {
    return sentence.toLowerCase().includes(word.toLowerCase());
}
console.log(containsWord("I love JavaScript", "javascript"));

// Q18 Remove All Specific Characters
function removeChar(str, char) {
    return str.split(char).join("");
}
console.log(removeChar("banana", "a"));

// Q19 Repeat a String
function repeatString(str, count) {
    return str.repeat(count);
}
console.log(repeatString("Hi", 3));

// Q20 Toggle Case
let str7 = "Hello World";
let result1 = "";

for (let char of str7) {
    if (char === char.toUpperCase()) {
        result = result + char.toLowerCase();
    } else {
        result = result + char.toUpperCase();
    }
}
console.log(result1);


// Most Important String Methods 

// | Method           | What it does             | Example                     |
// | ---------------- | ------------------------ | --------------------------- |
// | `.length`        | Gives length             | `"hello".length → 5`        |
// | `.toUpperCase()` | Uppercase                | `"hello" → "HELLO"`         |
// | `.toLowerCase()` | Lowercase                | `"HELLO" → "hello"`         |
// | `.split()`       | Converts string to array | `"abc".split("")`           |
// | `.join()`        | Converts array to string | `["a","b"].join("")`        |
// | `.reverse()`     | Reverses array           | `[1,2,3].reverse()`         |
// | `.sort()`        | Sorts array              | `["b","a"].sort()`          |
// | `.includes()`    | Checks presence          | `"hello".includes("ell")`   |
// | `.indexOf()`     | Finds position           | `"hello".indexOf("e")`      |
// | `.slice()`       | Extracts part            | `"hello".slice(1,4)`        |
// | `.trim()`        | Removes outer spaces     | `" hi ".trim()`             |
// | `.replace()`     | Replaces                 | `"hi".replace("h","b")`     |
// | `.replaceAll()`  | Replaces all             | `"aaa".replaceAll("a","b")` |
// | `.repeat()`      | Repeats string           | `"Hi".repeat(3)`            |
// | `.endsWith()`    | Checks ending            | `"hello".endsWith("lo")`    |