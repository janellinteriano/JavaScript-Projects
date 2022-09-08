function sentenceFunction() {
var a = "Today, we are ";
var b = "going to the mall ";
var c = "to buy you a new jacket.";
var wholeSentence = a.concat(b, c); //this will concatenate the variables
document.getElementById("demo").innerHTML = wholeSentence; //this will display the whole sentence
}

function sliceFunction() {
    var s = "Sally sells seashells by the seashore.";
    var sl = s.slice(12, 21); //slice method to get "seashells"
    document.getElementById("slice").innerHTML = sl;
}


function upperFunction() {
let u = "tigers are fast and strong.";
up = u.toUpperCase(); //turns whole sentence yo uppercase letters
document.getElementById("tiger").innerHTML = up;
}

const str = "Hello class, today we will be learning about different methods.";
let z = "class";
console.log(str.search(z)); //finds the word "class" and displays it in console

let w = 170;
console.log(w.toString()); //displays 170 as a string in console

var h = 50479.68523145;
document.write(h.toPrecision(8)); //uses precision method to display number with 8 places
console.log(h.toFixed(2)); //displays number in console with only 2 decimal places

document.write("<br>");

var string1 = "The year is 2022.";
var string2 = "The year is 2022.";
console.log(string1.valueOf() === string2.valueOf()); //will display "true" in console because values are the same