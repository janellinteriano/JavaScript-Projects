function displayType(genre) {
    var genreType = genre.getAttribute("data-genre-type");
    alert(genre.innerHTML + " is in the " + genreType + " genre!");
}