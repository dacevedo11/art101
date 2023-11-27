// Lab 13 Loops
// Daniel Acevedo 
// Nov 27 2023


function fizzBuzz() {
    var result = "";
    for (var i = 1; i <= 200; i++) {
        if (i % 3 == 0) {
            result += "Fizz";
        }
        if (i % 5 == 0) {
            result += "Buzz";
        }
        if (i % 7 == 0) {
            result += "Boom";
        }
        if (!(i % 3 == 0 || i % 5 == 0 || i % 7 == 0)) {
            result += i + " ";
        }
    }
    return result;
}

$("#button").click(function () {
    $("#output").html('<div class="text"><p>' + fizzBuzz() + '</p></div>');
});






