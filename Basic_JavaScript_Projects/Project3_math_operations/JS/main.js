function myFunction() {
    var Addition = 41 + 18; //Here we defined our Addition variable and assigned it 2 number values
    document.getElementById("Math").innerHTML = "The sum of 41 + 18 = " + Addition; //Here we are using the getElementbyId method to display the sum of the variables
}

function subtractionFunction() {
    var Subtraction = 20 - 10; //Here we defined our variable and assigned it number values
    document.getElementById("subtract").innerHTML = Subtraction; //Here we use the getElementbyId method to display the answer
}

function multiplication() {
    var multiply = 7 * 7; //Here we defined our variable and assigned it number values
    document.getElementById("Simple Math").innerHTML = "7 * 7 = " + multiply; //Here we use the getElementbyId method to display the answer
}

function division() {
    var divide = 100 / 25; //Here we defined our variable and assigned it number values
    document.getElementById("Simple Divide").innerHTML = "100 divided by 25 equals " + divide; //Here we use the getElementbyId method to display the answer
}

function moreMath() {
    var math = 7 * 2 + 3 / 4 * 17 - 10; //Here we defined our variable and assigned it number values
    document.getElementById("M").innerHTML = "7 times 2, plus 3, divided by 4, multiplied by 17, minus 10 equals " + math; //Here we use the getElementbyId method to display the answer
}

function modulusOperator() {
    var mod = 25 % 3; //Here we defined our variable and assigned it number values
    document.getElementById("MO").innerHTML = "25 divided by 3 has a remainder of " + mod; //Here we use the getElementbyId method to display the answer
}

function negationOperator() {
    var z = 14; //Here we defined our variable and assigned it a number value
    document.getElementById("NO").innerHTML = -z; //Here we use the getElementbyId method to display the answer
}



var g = 15; //here we defined our variable with a number value
g++;
document.write(g); //here we can display the variable + 1

var h = 19; //here we defined our variable with a number value
h--;
document.write(h); //here we can display the variable - 1

window.alert(Math.random() * 1000); //this method will display a random number between 0 and 1000




var n = prompt("Enter a number", ""); //this allows the user to enter their own number value
var answer = Math.sqrt(n); //this math method will find the square root of the value
alert ("The square root of " + n + " is " + answer); //this will display an alert box where the user can type their number in and they will recieve the square root answer
