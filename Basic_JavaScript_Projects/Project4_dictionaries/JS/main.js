function myDictionary() { 
    var Cat = { //This is where the variable is defined and is given a value
        Color: "Orange", //Specifies the color
        Breed: "Tabby", //Specifies the breed
        Age: 2, //Specifies the age
        Sound: "Meow!" //Specifies the sound
    };
    document.getElementById("Dictionary").innerHTML = Cat.Color; //This will display the Color value
    delete Cat.Age; //this statement deletes the Age
    }