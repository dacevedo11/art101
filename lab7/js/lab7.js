// Lab 7 - Functions
// Author: Daniel Acevedo <daceved4@ucsc.edu>
// Created: November 2, 2023

function sortUserName (str) {
    return str.toLowerCase().split("").sort().join("");
}

var userName = window.prompt("Enter your user name: ");
document.writeln("I fixed your name: ", sortUserName(userName), "</br>");