const prompt = require("prompt-sync")();
let n = prompt("Enter number of lines : ");

// Square pattern
console.log("Square pattern");
for(let i=0 ; i<n ; i++){
    let row = "";
    for(let j=0 ; j<n ; j++){
        row += "* "  ; 
    }
    console.log(row);
}

console.log("\n");

//right half pyramid
console.log("Right half pyramid");
for(let i=0 ; i<n ; i++){
    let row = "";
    for(let j=0 ; j<=i ; j++){
        row += "* "  ; 
    }
    console.log(row);
}

console.log("\n");

//Reverse right half pyramid
console.log("Reverse right half pyramid");
for(let i=0 ; i<n ; i++){
    let row = "";
    for(let j=5 ; j>i ; j--){
        row += "* "  ; 
    }
    console.log(row);
}

console.log("\n");

// left half pyramid
console.log("Left half pyramid");
for(let i=0 ; i<n ; i++){
    let row = "";
    for(let j=0 ; j<2*(n-i-1) ; j++){
        row +=" ";
    }
    for(let j=0 ; j<=i ; j++){
        row += "* " ; 
    }
    console.log(row);
}

console.log("\n");

//Reverse left half pyramid
console.log("Reverse left half pyramid");
for(let i=0 ; i<n ; i++){
    let row = "";
    for(let j=1 ; j<=2*i ; j++){
        row +=" ";
    }
    for(let j=5 ; j>i ; j--){
        row += "* "  ; 
    }
    console.log(row);
}

console.log("\n");

//reverse triangle pattern
console.log("Reverse triangle pattern");
for(let i=0 ; i<n ; i++){
    let row = "";
    for(let j=0 ; j<i ; j++){
        row += " "  ; 
    }
    for(let j=0 ; j<(n-i) ; j++){
        row += "* ";
    }
    console.log(row);
}

console.log("\n");

//triangle star pattern
console.log("triangle star pattern");
for(let i=0 ; i<n ; i++){
    let row = "";
    for(let j=0 ; j<(n-i-1) ; j++){
        row +=" ";
    }
    for(let j=0 ; j<=i ; j++){

        row += "* "  ; 
    }
    console.log(row);
}

console.log("\n");

// number increasing pyramid
console.log("number increasing pyramid");
for(let i=0 ; i<n ; i++){
    let row = "";
    let num=1;
    for(let j=0 ; j<=i ; j++){
        row += num+" "  ; 
        num++;
    }
    console.log(row);
}

console.log("\n");

// number changing pyramid
console.log("number changing pyramid");
let num=1;
for(let i=0 ; i<n ; i++){
    let row = "";
    for(let j=0 ; j<=i ; j++){
        row += num+" "  ; 
        num++;
    }
    console.log(row);
}

console.log("\n");

// number increasing reverse pyramid
console.log("number increasing reverse pyramid");
for(let i=0 ; i<n ; i++){
    let row = "";
    let num=1;
    for(let j=n ; j>i ; j--){
        row += num+" "  ; 
        num++;
    }
    console.log(row);
}

console.log("\n");


//Hollow Square pattern
console.log("Hollow Square pattern");
for (let i = 0; i < n; i++) {
    let row = "";
    for(let j = 0; j < n; j++){
        if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}

console.log("\n");

// Number triangle
console.log("Number triangle");
for(let i=0 ; i<n ; i++){
    let row = "";
    for(let j=0 ; j<(n-i-1) ; j++){
        row +=" ";
    }
    for(let j=0 ; j<=i ; j++){
        row += (i+1)+" "  ; 
    }
    console.log(row);
}

console.log("\n");
