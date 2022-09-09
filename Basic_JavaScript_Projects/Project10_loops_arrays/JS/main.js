function Call_Loop() {
    var number = "";
    var s = 1;
    while (s < 21) {
        number += "<br>" + s;
        s++;
    }
    document.getElementById("Loop").innerHTML = number; //will display 1 to 20
}

function celebFunction() {
var hername = "Selena Gomez"; //defined variable
let namelength = hername.length
document.getElementById("S").innerHTML = namelength; //displays the length of the string "Selena Gomez"
}


var drinks = ["Latte", "Espresso", "Americano", "Cold Brew", "Frappe"]; //array of drinks
var content = "";
var z;
function coffeeLoop() {
    for (z = 0; z < drinks.length; z++) {
        content += drinks[z] + "<br>";
    }
    document.getElementById("coffeeTypes").innerHTML = content; //displays list of drinks
 }

function gallery() {
    var  b_pic = [];
    b_pic[0] = "Monarch";
    b_pic[1] = "Orange Sulphur"; 
    b_pic[2] = "Viceroy";
    b_pic[3] = "Pipevine Swallowtail";
    document.getElementById("insect").innerHTML = "Look! I see a " + b_pic[0] + " butterfly!"; //will display sentence + b_pic[0]
}

function fruits() {
    const Apple = {color: "green", taste: "sweet", calories: "95", size: "small"}; //defining the Apple object
    document.getElementById("fruit").innerHTML = "I bought a " + Apple.size + " " + Apple.color + " apple today. It only has " + Apple.calories + " calories!";
}

document.write("<br>");

var t = 93;
document.write(t + "<br>");
 {
    let t = 100; //let keyword
    document.write(t);
}

  function myF(String1, String2) {
    return 200; //return statement
  }
  
  let myResult = myF("23", "50");
  console.log(myResult); //displays return value

  let cat = {
    breed: "American Shorthair",
    color: "orange",
    age: "2",
    description: function() {
        return "The cat I saw today was an " + this.color + " " + this.breed + "."; //return statement
    }
  };
  document.getElementById("catObject").innerHTML = cat.description(); //will display return statement with "this" keyword

  let text = "";
  for (let j = 0; j < 10; j++) {
    if (j === 7) break;
    text += j + "<br>";
    console.log(text); //displays numbers 0-6 loop in console 
  }

  let numberlist = "";
  for (let u = 0; u < 6; u++) {
    if ( u === 4) continue; //uses continue statement to skip 4
    numberlist += u + "<br>";
    console.log(numberlist);
  }