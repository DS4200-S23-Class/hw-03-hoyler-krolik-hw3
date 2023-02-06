

// function to change background of webpage on click
function change_background() {
    let color = document.body.style.backgroundColor;
    
    // if the color is not lightblue make it lightblue
    if (color != "lightblue") {
        document.body.style.backgroundColor = "lightblue";
}
    // otherwise make it white
    else {
        document.body.style.backgroundColor = "white";
    }
        

}