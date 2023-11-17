// Lab 11 - JavaScript Events and Forms
// Author: Daniel Acevedo <daceved4@ucsc.edu>
// Created: November 17, 2023

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
}

// click listener for button

$("#submit").click(function () {
    // get value of input field
    const userName = $("#user-name").val();
    // now let's sort it
    // append a new div to our output div
    userNameSorted = sortString(userName);
    $("#output-box").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});