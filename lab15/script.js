// Lab 15: AJAX
// Name: Daniel Acevedo <daceved4@ucsc.edu>
// Date: December 3, 2023

// Function to generate a random number within a specified range
function getRandomBerryId(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Define the range of valid berry IDs
  const minBerryId = 1; // Assuming 1 is the minimum valid ID
  const maxBerryId = 50; // Adjust this based on the actual maximum valid ID
  
  // Generate a random berry ID
  const randomBerryId = getRandomBerryId(minBerryId, maxBerryId);


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