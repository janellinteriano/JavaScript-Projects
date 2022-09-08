var S = 12; //global variable
function Add_numbers_1() {
    document.write(35 + S + "<br>");
}
function Add_numbers_2() {
    document.write(S + 18);
}
Add_numbers_1();
Add_numbers_2();

function addNumbers1() {
    var d = 23; //local variable
    document.write(13 + d + "<br>");
}
function addNumbers2() {
    var d = 23; //added local variable to this function
    document.write(16 + d);
}
addNumbers1();
addNumbers2();

document.write("<br>");

function myFunction() {
    if (new Date().getHours() > 12) { //states if the time is greater than 12pm,
        document.getElementById("Greeting").innerHTML = "Good Afternoon!"; //it will display "Good Afternoon!"
    }
}

if (30 > 20) { //if statement
    document.write("30 is greater than 20."); //will display this if 30 is greater than 20
}

function timeFunction() {
    Time = document.getElementById("Time").value; //user will input the value they want
    if (Time >= 12) { //if statement
        Greeting = "Good Afternoon!";
    }
    else { //else statement
        Greeting = "Good Morning!";
    }
    document.getElementById("What_time_is_it?").innerHTML = Greeting; //will display either greeting depending on the user's input value
}

function Time_Function() {
    var Time = new Date().getHours(); //this will pull the time from your computer
    var Reply;
    if (Time < 12 == Time > 0) { //if statement
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) { //else if statement
        Reply = "It is afternoon.";
    }
    else { //else statement
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //will display var Reply based on computer's time
}