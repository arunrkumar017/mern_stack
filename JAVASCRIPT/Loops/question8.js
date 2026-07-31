// display diffrent types of day greeting on based of current time
const currentTime = new Date();
const hour = currentTime.getHours(); //Return hour in 24-hour formats
if(hour >= 5 && hour < 12){
    console.log("Good Morning!");
}else if(hour >= 12 && hour < 17){
    console.log("Good Afternoon!");
}else if(hour >= 17 && hour < 21){
    console.log("Good Evening!");
}else{
    console.log("Good Night!");
}