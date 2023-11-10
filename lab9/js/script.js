// Lab 9 - Libraries & jQuery
// Author: Daniel Acevedo <daceved4@ucsc.edu>
// Created: November 9, 2023
// Requirements: jQuery must be loaded for this script to work

// Challenge
$("#challenge").append("<button id='button-challenge'>Press Me</button>");

$("#button-challenge").click(function(){
    $("#challenge").toggleClass("special");
});

// Problems
$("#problems").append("<button id='problems-challenge'>Press Me</button>");

$("#problems-challenge").click(function(){
    $("#problems").toggleClass("special");
});

//Results
$("#results").append("<button id='results-challenge'>Press Me</button>");

$("#results-challenge").click(function(){
    $("#results").toggleClass("special");
});
