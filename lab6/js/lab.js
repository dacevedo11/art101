// Lab 6 - Arrays and Objects
// Author: Daniel Acevedo <daceved4@ucsc.edu>
// Created: October 27, 2023

// Define Variables
myTransport = ["feet", "car", "bike", "bus"];

myMainRide = {
  make: "Toyota", 
  model: "RAV4",
  color: "Blue",
  year: 2022,
  age: function(){
    return 2023 - this.year;
  }
}

// Output 
document.writeln("How I like to get around: ", myTransport, "</br>");
document.writeln("My main ride: <pre>", JSON.stringify(myMainRide, null, "\t"), "</pre>");