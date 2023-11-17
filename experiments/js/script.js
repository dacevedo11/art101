function sayMyName () {
    var name = $("#input").val();
    $("#title").html(name);
}

$("#my-button").click(sayMyName);