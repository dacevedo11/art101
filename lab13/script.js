function fizzBuzz() {
    var longString = "";
    for (var i = 1; i <= 200; i++) {
        if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
            longString += i + ".) FizzBuzzBoom!<br>";
        } else if (i % 3 == 0 && i % 5 == 0) {
            longString += i + ".) FizzBuzz!<br>";
        } else if (i % 3 == 0 && i % 7 == 0) {
            longString += i + ".) FizzBoom!<br>";
        } else if (i % 5 == 0 && i % 7 == 0) {
            longString += i + ".) BuzzBoom!<br>";
        } else if (i % 3 == 0) {
            longString += i + ".) Fizz!<br>";
        } else if (i % 5 == 0) {
            longString += i + ".) Buzz!<br>";
        } else if (i % 7 == 0) {
            longString += i + ".) Boom!<br>";
        } else {
            longString += i + ".) ----- <br>";
        }
    }
    return longString;
}


$("#button").click(function () {
    $("#output").html(fizzBuzz());
    $("#output-box").toggleClass("hidden");
});