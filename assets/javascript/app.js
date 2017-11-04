// api_key=dc6zaTOxFJmzC



      
 

  var topics = ["skydiving", "rock climbing", "mountain biking", "whitewater kayaking", "motorcross", "base jumping", "snowboarding", "paintball", "caving"];
  
  // $(document).ready(function() {

  
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

            sportImage.attr ({
              "src": results[i].images.fixed_height_still.url,
              "data-still": results[i].images.fixed_height_still.url,
              "data-animate": results[i].images.fixed_height.url,
              "data-state": "sitll",
              });

            //append ratin and gifDiv to div
            gifDiv.append(p);
            gifDiv.append(sportImage);

            $("#gifs-appear-here").prepend(gifDiv);
            }
           }

          // //pause/animate gifs
            $(".item").on("click", function() {
              
              var state = $(this).attr("data-state");
                
              if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
                } 
                  else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }  
            });

        });
    });
// });

    //render button function
      function renderButtons() {

        //empty button div
        $("#buttons-here").empty();

        // loop through the array of movies
        for (var i = 0; i < topics.length; i++) {

          var newSport = $("<button>");
          
          newSport.addClass("sport");
          
          newSport.attr("data-name", topics[i]);
          
          newSport.text(topics[i]);
          
          $("#buttons-here").append(newSport);

          
          }
         }


      // //click to add movie to array from input
      $("#add-sport").on("click", function(enent) {
        event.preventDefault();

        var sportButton = $("#sports-input").val().trim();

        topics.push(sportButton);

        renderButtons();

        $("#sports-input").val("");

      });
    

     






 



 


      



  



      

