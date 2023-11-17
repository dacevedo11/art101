// Lab 11 - JavaScript Events and Forms
// Author: Daniel Acevedo <daceved4@ucsc.edu>
// Created: November 17, 2023

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
}

// Takes a string and turns it into an anagram | Credit to Wes Modes and ChatGPT
function anagram(inputString) {
    // Convert the string to an array of characters
    const charArray = inputString.split('');

    // Use the Fisher-Yates (Knuth) shuffle algorithm to shuffle the characters
    for (let i = charArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
    }

    // Join the shuffled characters back into a string
    const anagram = charArray.join('');

    // Return the generated anagram
    return anagram;
}

// given a string, return string in Title Case | Credit to Wes Modes and ChatGPT
String.prototype.toTitleCase = function () {
    return this.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

// click listener for button
$("#sort").click(function () {
    const userName = $("#user-name").val();
    userNameSorted = sortString(userName);
    $("#sortbox").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});

$("#shuffle").click(function () {
    const userName = $("#user-name").val();
    userNameShuffled = anagram(userName).toTitleCase();
    $("#shufflebox").append('<div class="text"><p>' + userNameShuffled + '</p></div>');
});