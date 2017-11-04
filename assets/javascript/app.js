// api_key=dc6zaTOxFJmzC

var sports = ["skydiving", "rock climbing", "mountain biking", "whitewater kayaking", "motorcross", "base jumping", "snowboarding", "paintball", "caving"];
      
// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         sport + "&api_key=dc6zaTOxFJmzC&limit=10";

        $(document).ready(function() {
        	renderButtons();
        })


//ajax call
    //   $.ajax({
    //   url: queryURL,
    //   method: 'GET'
    // })
    //   .done(function(response) {
    //   console.log(response);
    // });

//render button function
	function renderButtons() {

        // Deleting the movie buttons prior to adding new movie buttons
        // (this is necessary otherwise we will have repeat buttons)
        $("#buttons-here").empty();

        // Looping through the array of movies
        for (var i = 0; i < sports.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array.
          // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
          var newSport = $("<button>");
          // Adding a class
          newSport.addClass("sport");
          // Adding a data-attribute with a value of the movie at index i
          newSport.attr("data-name", sports[i]);
          // Providing the button's text with a value of the movie at index i
          newSport.text(sports[i]);
          // Adding the button to the HTML
          $("#buttons-here").append(newSport);
        }
      }


      // $("")

 //pause/animate gifs
   // $(".gif").on("click", function() {
   //    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
   //    var state = $(this).attr("data-state");
   //    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
   //    // Then, set the image's data-state to animate
   //    // Else set src to the data-still value
   //    if (state === "still") {
   //      $(this).attr("src", $(this).attr("data-animate"));
   //      $(this).attr("data-state", "animate");
   //    } else {
   //      $(this).attr("src", $(this).attr("data-still"));
   //      $(this).attr("data-state", "still");
   //    }
