var counter = 0;
var wins = 0;

var losses= 0;

var totalScore= wins - losses;

var randomNumber= 0

function gameStart() {
    // code to be executed
    randomNumber = Math.floor(Math.random() * 50)
    console.log(randomNumber);
    $("#number-to-guess").text(randomNumber)  
    counter=0
    $("#current-score").text(counter);
  }



gameStart(randomNumber)

//document.querySelector('#title').addEventListener('click', function() {
    //console.log(Math.floor(Math.random() * 50))
//})


//document.querySelector
$('#title').on('click', function() {
    
})

var targetNumber = 40;




  // Creating multiple crystals each with their own unique number value.

  // Begin by expanding array to include four options.
  var numberOptions = [10, 5, 3, 7];

  // Next create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration,create an imageCrystal
    var imageCrystal = $("<img>");

    //Each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }

  // The click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {

    console.log(randomNumber);

    // Determining the crystal's value requires extracting the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // Add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    //alert("New score: " + counter);
    $("#current-score").text(counter);

    if (counter === randomNumber) {
      alert("You win!");
      gameStart();
      wins++;
      document.write("wins++=",wins++);
    }

    else if (counter >= randomNumber) {
      alert("You lose!!");
      gameStart();
      losses++;
      document.write("losses=", losses++);
    }

    //Had Trouble incrementing wins and losses

  });