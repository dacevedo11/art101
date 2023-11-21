// Lab 12: Conditionals
// Author: Daniel Acevedo <daceved4@ucsc.edu>
// Created November 20, 2023

function sortingHat(str) {
    var length = str.length;
    var mod = length % 4;

    if (mod == 0)
        return "Gryffindor"; 
    else if (mod == 1)
        return "Slytherin";
    else if (mod == 2)
        return "Hufflepuff";
    else if (mod == 3)
        return "Ravenclaw";
}

$("#button").click(function(){
    const inputString = $("#input").val();
    house = sortingHat(inputString);
    $("#output").html('<div class="text"><h3> The Sorting Hat has sorted you into ' + house + '!</h3></div>');
});

