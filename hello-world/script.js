function sayMyName () {
    var name = prompt("Say my name: ");
    $("#title").html(name);
    $("#image").html("<img src='heisenberg.gif'>");
}

$("#my-button").click(sayMyName);