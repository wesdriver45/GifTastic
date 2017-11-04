// api_key=dc6zaTOxFJmzC

var sports = ["skydiving", "rock climbing", "mountain biking", "whitewater kayaking", "motorcross", "base jumping", "snowboarding", "paintball", "caving"];

      
 $(document).ready(function() {

    renderButtons();


//on click for all buttons
   $("button").on("click", function() {
      var xSport = $(this).attr("data-name");

      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + xSport + "&api_key=dc6zaTOxFJmzC&limit=10";
        
        
    //ajax call
        $.ajax({
        url: queryURL,
        method: "GET"
              })

        .done(function(response) {
        console.log(response);
        
        //store results
        var results = response.data;
        //narrow down rating to g
        for (var i = 0; i < results.length; i++) {
          if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
            //making a div for the gifs
            var gifDiv = $("<div class = 'item'>");
            //store the rating
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            //making an img
            var sportImage = $("<img>");

            sportImage.attr("src", results[i].images.fixed_height_still.url);

            //append ratin and gifDiv to div
            gifDiv.append(p);
            gifDiv.append(sportImage);

            $("#gifs-appear-here").prepend(gifDiv);
            }
           }
        });

      //click to add movie to array from input
      $("#add-sport").on("click", function(enent) {
        event.preventDefault();

        var sportButton = $("#sports-input").val().trim();

        sports.push(sportButton);

        renderButtons();
      });
    
    //render button function
  function renderButtons() {

        //empty button div
        $("#buttons-here").empty();

        // loop through the array of movies
        for (var i = 0; i < sports.length; i++) {

          var newSport = $("<button>");
          
          newSport.addClass("sport");
          
          newSport.attr("data-name", sports[i]);
          
          newSport.text(sports[i]);
          
          $("#buttons-here").append(newSport);

          $("#sports-input").val("");
          }
       }
     });
 });





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




 


      



  



      

