// Lab 8 - Anon Functions and Callbacks
// Author: Daniel Acevedo <daceved4@ucsc.edu>
// Created: November 3, 2023

// Squaring Function
function square (num) {
	return num * num;
}

var array = [4,16,9,25];

var output1 = document.getElementById("output1"); 
output1.innerHTML = "[" + array.join(", ") + "]";

var result = array.map(square);
var output2 = document.getElementById("output2"); 
output2.innerHTML = "[" + result.join(", ") + "]";

var result = array.map(function(x){
    return x ** 0.5;
})
var output3 = document.getElementById("output3"); 
output3.innerHTML = "[" + result.join(", ") + "]";