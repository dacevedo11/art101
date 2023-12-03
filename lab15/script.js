// Lab 15: AJAX
// Name: Daniel Acevedo <daceved4@ucsc.edu>
// Date: December 3, 2023

$("#activate").click(function () {
    $.ajax(
        {
            url: "https://pokeapi.co/api/v2/berry/7/",
            type: "GET",
            dataType: "json"
        }
    )

        .done(
            function (result) {
                console.log("done");
                console.log(result);
                $("#output").append("<strong>" + result.item.name + "</strong>");

            }
        )

        .fail(
            function (jqXHR, textStatus, errorThrown) {
                console.log("Error:", textStatus, errorThrown);
            }
        );

});