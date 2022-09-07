function Vote_Function() {
    var Age, Can_Vote; //Defining our variable and its values
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are not old enough to vote.":"You are eligable to vote.";
    document.getElementById("Vote").innerHTML = Can_Vote;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model; //utilizing "this" keyword
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", "2020", "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", "2019", "White and Black"); //utilizing "new" keyword
var Erik = new Vehicle("Ford", "Pinto", "1971", "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + //This will display a sentence utilizing the "this" and "new" keywords
     "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Cat(Breed, Color, Age) {
    this.Cat_Breed = Breed;
    this.Cat_Color = Color; //"this" keyword
    this.Cat_Age = Age;
}
var Luna = new Cat("Main Coon", "Brown", "2");
var Bella = new Cat("Ragdoll", "White", "4");
var Willow = new Cat("Persian", "Gray", "2"); //"new" keyword
function kittyFunction() {
    document.getElementById("New_and_This").innerHTML = "Willow is a " + Willow.Cat_Age + " year old " + Willow.Cat_Breed + " cat. She is the color " + Willow.Cat_Color + "."; //This will display a sentence utilizing the "this" and "new" keywords
}

function Dog(Breed, Color, Age) {
    this.Dog_Breed = Breed; //"this " keyword
    this.Dog_Color = Color;
    this.Dog_Age = Age;
}
var Max = new Dog("German Shepard", "Brown", "3");
var Lucy = new Dog("Border Collie", "Black and White", "2");
var Anna = new Dog("French Bulldog", "Gray", "4"); //"new" keyword
function dogFunction() {
    document.getElementById("DogSpecies").innerHTML = "Max is a " + Max.Dog_Breed + "."; //This will display a sentence utilizing the "this" and "new" keywords
}

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var starting_point = 23;
        function Plus_five() {starting_point += 5;}
        Plus_five(); //This is the nested function
        return starting_point; //This will display "28"
    }
}