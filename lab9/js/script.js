// Lab 9 - Libraries & jQuery
// Author: Daniel Acevedo <daceved4@ucsc.edu>
// Created: November 9, 2023
// Requirements: jQuery must be loaded for this script to work

$(".special-sections").append("<button class='toggle-button'>Push Me</button>");

$(".special-sections button").click(function() {
    $(this).parent().toggleClass("special");
});

