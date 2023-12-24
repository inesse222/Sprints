// Guess My Number//




// 1 , 2 

var upperBound = 6
var correctNumber = randInt(upperBound)

function guessMyNumber(playerguess) {

     if (playerguess > upperBound) {
          return " Guess a number between 0 and " + upperBound
     } 
     else if (playerguess === correctNumber) {
          return "You Guessed My Number "
     }
     return "Nope! Try again "
}


// 3 - 

var upperBound = 6
var correctNumber = randInt(upperBound)
var counter = 0  // we add a variable called counter and initialise it with 0 , after any incorrect try , the counter will be incremented by 1
                // until the guess will be correct

function guessMyNumber (playerguess) {
    
    if (playerguess> upperBound ) {
        counter ++
       return " Guess a number between 0 and " + upperBound
    }
    else if (playerguess === correctNumber){
        counter++
        return "you guessed my number in "+counter+ " " +"Guesses"
    }
         counter ++
    return "Nope! Try again "
}




var upperBound = 3
var correctNumber = randInt(upperBound)
var counter = 0


function guessMyNumber (playerGuess) {
    
    if (playerGuess > upperBound ) {
        counter ++
       return " Guess a number between 0 and " + upperBound
    }

        
    else if (playerGuess === correctNumber && counter===0){
        return " Congrat !! you guessed my number in 1 guess "
    } 
    else if (playerGuess === correctNumber) {
        counter++
        return "you guessed my number in "+counter+ " " +"Guesses"
    }

        counter ++
        return "Nope! Try again "
}

/*
 to be sure that the guess will be from the first try , we need 2 conditions at the same time :
   - playerguess === correctNumber 
   - and counter===0 (no previous tries)
 */ 


// 4 -


var correctNumber = randInt(upperBound)
var counter = 0


function guessMyNumber (playerGuess , upperBound) {

    var limit = 3

    if (limit === counter){
       return "Sorry , You have  no other Chance"
    }
    
    else if (playerGuess > upperBound ) {
        counter ++
       return " Guess a number between 0 and " + upperBound
    }

        
    else if (playerGuess === correctNumber && counter===0){
        return " Congrat !! you guessed my number in 1 guess "
    } 
    else if (playerGuess === correctNumber) {
        counter++
        return "you guessed my number in "+counter+ " " +"Guesses"
    }

        counter ++
        return "Nope! Try again "
}

// we add a variable named limit and we assign the number of times the player can guess the correct number
// if the number of tries reach the limit , the player can no more guess and the game ends .


// 5 , 6 


var correctNumber = randInt(upperBound)
var counter = 0
var hightScore=4

function guessMyNumber (playerGuess , upperBound) {
    
    var limit = 5

    if (limit === counter){
       return "Sorry , You have  no other Chance"
    }
    
    else if (playerGuess > upperBound ) {

        upperBound--
        counter ++

       return " Guess a number between 0 and " + upperBound
    }

        
    else if (playerGuess === correctNumber && counter===0){

        upperBound++
        counter++
        hightScore = counter 

        return " Congrat !! you guessed my number in 1 guess, New record  "+ hightScore
    } 

        
    else if (playerGuess === correctNumber) {

        upperBound++
        counter++

        if (counter < hightScore){
            hightScore=counter
        return "You win with a record , the new hight score is  " + hightScore
        } 

        else return "you guessed my number in "+counter+ " " +"Guesses"
    }


        upperBound--
        counter ++
        return "Nope! Try again "
}

//--------------------------------------
//-----------------

var correctNumber = randInt(upperBound)
var counter = 0
var hightScore=4
var upperBound = 5


function guessMyNumber (playerGuess) {
    
    var limit = 5

    if (limit === counter){
       return "Sorry , You have  no other Chance"
    }
    
    else if (playerGuess > upperBound ) {
        counter ++
        if (upperBound===1) {                // this condition is to avoid decreasing the upperBound to a negative value 
                                            // => when the upperBound is 1 and we didn't guess from the first try 
        return " Guess a number between 0 and 1" 
        }
        upperBound--
       return " Guess a number between 0 and " + upperBound
    }

    
    else if (playerGuess < correctNumber) {
        counter++;
        return " Too low. Up.";             
   } 
    else if (playerGuess > correctNumber) {
        counter++;
        return " Too high! Down.";} 

        
        
    else if (playerGuess === correctNumber && counter===0){
        upperBound++
        counter++
        hightScore = counter 
        return " Congrat !! you guessed my number in 1 guess, New record is:  "+ hightScore
    } 

   
    else if (playerGuess === correctNumber) {
        upperBound++
        counter++

        if (counter < hightScore){
            hightScore=counter
        return "You win with a record , the new hight score is  " +  hightScore
        } 
        else return "you guessed my number in "+counter+ " " +"Guesses"
    }

       
        upperBound--
        counter ++
        return "Nope! Try again"
}
