function My_First_Function() {
    var s = "This is a button" //defined our s variuable and gave it a string value
    document.getElementById("Button_Text").innerHTML = s //used getElementbyId method to display string
}

function My_Function() {
    var sentence = "I am eager"; //defined our variable and gave it a string value
    sentence += " to learn a lot from this course!"; //used operator to concatenate the strings
    document.getElementById("Concatenate").innerHTML = sentence; //used getElementbyId method to display concatenated string
}
