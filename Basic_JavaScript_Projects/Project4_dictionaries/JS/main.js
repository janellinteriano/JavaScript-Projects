function myDictionary() { 
    var Cat = { //This is where the variable is defined and is given a value
        Color: "Orange", //Specifies the color
        Breed: "Tabby", //Specifies the breed
        Age: 2, //Specifies the age
        Sound: "Meow!" //Specifies the sound
    };
    delete Cat.Age; //this statement deletes the Age
    document.getElementById("Dictionary").innerHTML = Cat.Age; //This will display "undefined"
    }