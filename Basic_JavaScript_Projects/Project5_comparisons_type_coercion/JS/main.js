document.write(typeof "Word"); //This will display "string"

document.write("<br>");

document.write("13" + 7); //This will display "137"

document.write("<br>");

function myFunction() {
    document.getElementById("Test").innerHTML = 0 / 0; //This will display "Not a Number"
}


function anotherFunction() {
    document.getElementById("Test2").innerHTML = isNaN("This string is not a number"); //This will display "true" because a string is not a number
}


function thirdFunction() {
    document.getElementById("Test3").innerHTML = isNaN("6"); //This will display "false" because 6 is a number
}


document.write(3E564); //Will display infinity (higher than maximum floating number)

document.write("<br>");

document.write(-3E564); //Will display negative infinity

document.write("<br>");

document.write(2 > 4); //Boolean comparison, will display "false"

document.write("<br>");

document.write(3 > 1); //Boolean comparison, wiwll display "true"

console.log(300 + 25); //Will display "325" in console

console.log(5 < 4); //Will display "false" in console

document.write("<br>");

document.write(11 == (11 + 0)); //Compares "11" to "(11 + 0)", outputs "true"

document.write("<br>");

document.write(2 == 6); //Compares "2" to "6", outputs "false"

document.write("<br>");

document.write(7 + "7"); //This combines a number and a string

console.log(17 === 17); //This cmpares the data types and values, outputs "true"
 
console.log(2 === "2"); //This compares the data types and values, outputs "false" because data types are different

console.log(9 === "ten"); //This will output "false" because the data types and values are not the same

console.log(10 === 12); //This will display "false" because the values are not the same

console.log(6 > 4 && 12 > 7); //This will display "true"

console.log( 6 < 5 && 2 > 9); //This will display "false"

console.log(16 > 13 || 3 < 3); //This will display "true"

console.log(2 > 3 || 5 > 6); //This will display "false"

console.log(! (6 > 9)); //This will display "true"

console.log(! (5 > 4)); //This will display "false"