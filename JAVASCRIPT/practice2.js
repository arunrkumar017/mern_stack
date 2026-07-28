// Ternary operator question


//Exe 1 : pass or fail?
console.log("Exe 1 : pass or fail?");
let marks=65;
let result;
(marks>=40 )? result ="pass" : result= "fail";
console.log(result); 

//Exe 2 : Even or odd number?
console.log("Exe 2 : Even or odd number?");
let number=7;
let type;
(number%2==0)? type="even" : type="odd" ;
console.log(type); 

//Exe 3 : Driving license Eligibility?
console.log("Exe 3 : Driving license Eligibility?");
let age=19;
let message;
(age>=18)? message="Eligible for driving" : message="Not Eligible for driving" 
console.log(message); 

//Exe 4 : Discount checker!
console.log ("Exe 4 : Discount checker!");
let totalAmount = 1200;
let discount;
(totalAmount>1000)? discount=200  : discount=0;
console.log(discount);

//Exe 5 : Day time greeting
console.log ("Exe 5 : Day time greeting");
let hour = 10;
let greeting;
(hour<12)? greeting="Good Morning"  : greeting="Good Day";
console.log(greeting);

//Exe 6 : Game Score high alert
console.log ("Exe 6 : Game Score high alert");
let score =95;
let isHighScore;
(score>90)? isHighScore=true : isHighScore=false;
console.log(isHighScore);

//Exe 7 : Weather Advice
console.log ("Exe 7 : Weather Advice");
let isRaining= 1;
let action;
(isRaining)? action="Take an umbrella"  : action="Enjoy the Sun";
console.log(action);

//Exe 8 : Speed Limit Warning
console.log ("Exe 8 : Speed Limit Warning");
let speed = 85;
let status;
(speed>80)? status="Over-Speeding" : status="Normal-Speed";
console.log(status);

//Exe 9 : Login Check
console.log ("Exe 9 : Login Check");
let isLoggedIn = false;
let buttonText;
(isLoggedIn)? buttonText="Logout"  : buttonText="Login"  ;
console.log(buttonText);

//Exe 10 : Bigger Number Finder(2 numbers)
console.log ("Exe 10 : Bigger Number Finder(2 numbers)");
let a=55;
let b=25;
let max;
(a>b)? max=a  : max=b;
console.log(max);