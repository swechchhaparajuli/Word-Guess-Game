

    var begin = document.getElementById("begin-game");

  /*  start();

    function start(){
        if (!confirm ("Would you like to start a game?")){
            alert("Alright, have a nice day");
            begin.textContent = "Game Over!";
            return;
        }else{
            begin.textContent = "press X to begin";
            return;
        }
    }*/

    begin.textContent = "press X to begin";

    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var wordChoices = ["words", "elephant", "onomonopiea", "pteradactyl", "arthopod","l"];

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var turns = 9;
    var indexFound;
    var dash;

    // Create variables that hold references to the places in the HTML where we want to display things.
    
    var userChoiceText = document.getElementById("userchoice-text");
    var hangmanWord = document.getElementById("hangman-word");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var turnsText = document.getElementById("turns-text");


    var hangWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    // chooses a word
    turns = hangWord.length + 5;


    document.onkeyup = function(event) {

        

    var vid = document.getElementById("circleOfLife"); 
      // Determines which key was pressed.
        var userGuess = event.key;
        var printWord = "";
        
        console.log(dash);
      // Randomly chooses a choice from the options array. This is the Computer's guess.
      
      if ((userGuess === "x") || (userGuess === "X")) {
         vid.play();
        begin.textContent = "HangMan";
      
        
        dash = ["_ "];
      for (var i = 0; i < hangWord.length-1; i++ ){
        dash.push("_ ");
        printWord = printWord + dash[i];
      }
    }

    console.log(dash);


      hangmanWord.textContent = printWord;
      
      lossesText.textContent = "losses: " + losses;
      winsText.textContent = "wins: " + wins;
      turnsText.textContent = "turns left: " + turns;
    

          var found = false;
          for (var i = 0; i< hangWord.length; i++){

            //if(userGuess === hangWord[i]){
              //  dash[i] = userGuess;
            // }
              //loop through word checking for letter

               if (hangWord[i].toLowerCase() === userGuess){
                   found = true;
                   //indexFound = i;
                   dash[i] = hangWord[i];
                    
                   hangmanWord.textContent = dash.join('');
               }
               if (found){
                 if (i==(hangWord.length-1)){
                   wins++;
                   turns--;
                   winsText.textContent = "wins: " + wins;
                   turnsText.textContent = "turns left: " + turns;
                   hangmanWord.textContent = dash.join('');
                   //dash[indexFound] = hangWord[indexFound];
                   //for some reason adding thismakes the wins stop incrementing
                 }
               }else if (i==(hangWord.length-1)) {
                 losses++;
                 turns--;
                 lossesText.textContent = "losses: " + losses;
                 turnsText.textContent = "turns left: " + turns;
                 hangmanWord.textContent = dash.join('');
              } 


              if (userGuess != "x" || userGuess != "X"){
                userChoiceText.textContent = "You chose: " + userGuess;
            }
         

              if (turns < 0){
                userChoiceText.textContent = "You lost, Game Over";
                hangmanWord.textContent = null;
                winsText.textContent = null;
                lossesText.textContent = null;
                turnsText.textContent = null;
                  
              }
              if(hangWord === dash.join('')){
                
                userChoiceText.textContent = "Congratulations, You Won!";
                hangmanWord.textContent = null;
                winsText.textContent = null;
                lossesText.textContent = null;
                turnsText.textContent = null;
                
              }

              
        }
            
    
     
        

       

        console.log(hangWord)

        // Hide the directions
        //directionsText.textContent = "";

        // Display the user and computer guesses, and wins/losses/ties.
        

    } 
  
        
    
  