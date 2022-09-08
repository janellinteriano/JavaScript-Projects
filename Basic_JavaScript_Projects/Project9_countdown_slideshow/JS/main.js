function countdown() {
    var seconds = document.getElementById("seconds").value; //user will enter how long to set the timer for

    function tick() {
        seconds = seconds - 1; //timer will count down by 1s
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's Up!"); //alert box will display
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

//Slideshow

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides"); //takes class name "mySlides"
    let dots = document.getElementsByClassName("dot"); //takes class name "dot"
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
}