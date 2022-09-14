var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext("2d");

ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2); //forms a circle
ctx.fill(); //makes circle red



var ca = document.getElementById('canvas2'); //defines another canvas
var ctx = ca.getContext('2d');

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "purple"); //adds gradient colors
grd.addColorStop(1, "lightblue");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100); //creates rectangle



function Flavor_Function() {
    var Flavor_Output;
    var Flavors = document.getElementById("Flavor_Input").value; //the user inputs their flavor
    var Flavor_String = " is a great flavor!";
    switch(Flavors) {
        case "Vanilla":
            Flavor_Output = "Vanilla" + Flavor_String;
        break;
        case "Mint Chocolate Chip":
            Flavor_Output = "Mint Chocolate Chip" + Flavor_String;
        break;
        case "Rocky Road":
            Flavor_Output = "Rocky Road" + Flavor_String; //loop wil stop at user's flavor input
        break;
        case "Strawberry":
            Flavor_Output = "Strawberry" + Flavor_String;
        break;
        case "Coffee":
            Flavor_Output = "Coffee" + Flavor_String;
        break;
        default:
            Flavor_Output = "Please enter an ice cream flavor exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Flavor_Output; //will display the flavor + string
}

function Hello_Function() {
    var S = document.getElementsByClassName("click"); //used getElementByClassName to grab "click"
    S[0].innerHTML = "The text has changed!"; //will change first item in class 
}




