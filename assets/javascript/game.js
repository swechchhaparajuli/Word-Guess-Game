

   
   
   var begin = document.getElementById("begin-game");

    function restartPage(){ 
        location.reload();
    }

   
    function giveHintImg(){
        hintImg = document.getElementById("hint-Img");
        hintImg.src = 'file:///Users/Swechacha/Desktop/Bootcamp/week2/Word-Guess-Game/assets/images/'+ hangWord + ".jpg";
    }
   


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
    var wordChoices = ["Simba", "Nala", "HakunaMatata", "Mufasa", "pride","Rafiki","lion" , "LionKing", "Hamlet" , "Timone", "Pumbaa", "Scar"];

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = -1;
    var turns = 9;
    var indexFound;
    var dash;

    // Create variables that hold references to the places in the HTML where we want to display things.
    
    var userChoiceText = document.getElementById("userchoice-text");
    var hangmanWord = document.getElementById("hangman-word");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var turnsText = document.getElementById("turns-text");
    var hintImg = document.getElementById("hint-Img");


    var hangWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    // chooses a word
    turns = hangWord.length + 3;


    document.onkeyup = function(event) {

       
        

    var vid = document.getElementById("circleOfLife"); 
      // Determines which key was pressed.
        var userGuess = event.key;
        var printWord = "";
        
        console.log(dash);
      // Randomly chooses a choice from the options array. This is the Computer's guess.
      
      if (((userGuess === "x") || (userGuess === "X")) && true) {
         vid.play();
        begin.textContent = "Lion King Word-Guess Game";
        
      
        
        dash = ["_ "];
      for (var i = 0; i < hangWord.length-1; i++ ){
        if(hangWord[i]== " "){
            dash.push(" ");
            printWord = printWord + " ";
        }else{
            dash.push("_ ");
            printWord = printWord + dash[i];
        }
        
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
                   //turns--;
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

                userChoiceText.textContent = "You lost, Game Over.";
                hangmanWord.textContent = "The word was: " ;
                winsText.textContent = hangWord;
                lossesText.textContent = null;
                turnsText.textContent = null;
                hintImg.src = 'file:///Users/Swechacha/Desktop/Bootcamp/week2/Word-Guess-Game/assets/images/'+ hangWord + ".jpg";
                  
              }
              if(hangWord === dash.join('')){
                
                userChoiceText.textContent = "Congratulations, You Won!";
                hangmanWord.textContent = hangWord;
                winsText.textContent = null;
                lossesText.textContent = null;
                turnsText.textContent = null;
                
              }
   
        }

        console.log(hangWord);

        // Hide the directions
        //directionsText.textContent = "";

        // Display the user and computer guesses, and wins/losses/ties.
        

    } 
  
        
    
  