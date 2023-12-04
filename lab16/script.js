// Lab 16: JSON and APIs
// Name: Daniel Acevedo <daceved4@ucsc.edu>
// Date: 12/4/2023

console.log("JS loaded!");

var URLpre = "https://xkcd.com/";
var URLpost = "info.0.json";

//  A helper function to turn single and double quotes into html symbols so they don't confuse html tags
// Credit: Wes Modes Lab 16
function make_safe(str) {
    return str.replace(/'/g, '&apos;').replace(/"/g, '&quot;');
}

function getComic(num) {
    var numStr;
    if (typeof num === 'undefined')
        numStr = ""
    else
        numStr = num.toString() + "/";

    var URL = URLpre + numStr + URLpost;

    const comicObj = {
        url: URL,
        method: "GET",
        dataType: "json",
        success: ajaxSuccess,
        error: ajaxError
    }

    $.ajax(comicObj);
}

// Button Listener Event
$("#button").click(function () {
    console.log("Button clicked!");

    const comicObj = {
        url: URL,
        method: "GET",
        dataType: "json",
        success: ajaxSuccess,
        error: ajaxError
    }

    $.ajax(comicObj);
})

function ajaxSuccess(data) {
    console.log("Here's what I got: ", data);

    var month = data.month;
    month = make_safe(month);

    var day = data.day;
    day = make_safe(day);

    var year = data.year;   
    year = make_safe(year);

    var title = data.title;
    title = make_safe(title);

    var alt = data.alt;
    alt = make_safe(alt);

    var img = data.img;
    img = make_safe(img);

    var comicNum = data.num;

    var html = `<h3><u>${title} - ${month}/${day}/${year}</u></h3>
    <img src="${img}" title="${alt}"><br>
    <button id="prev">Previous</button> <button id="next">Next</button>`;

    // jQuery stuff
    $("#output").html(html);

    // Button Listener Events
    $("#prev").click(function () {
        getComic(comicNum - 1);
    })

    $("#next").click(function () {
        getComic(comicNum + 1);
    })
}

function ajaxError(request, error) {
    console.log("Oops:", request, error)
}

getComic();