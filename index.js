var inquirer = require("inquirer");

var Word = require("./word")

var wordOptions = ["hey", "unicorn", "balloon", "horray","teleportation","music","incessant"]
var randomMax = wordOptions.length
var randomIndex = (Math.floor(Math.random() * randomMax))
var wordChoiceRandom = wordOptions[randomIndex]
var wordDisplay = ""
var letterArray = Array.from(wordChoiceRandom)
//console.log(letterArray)

var wordGuess = new Word()
wordGuess.makeArray(letterArray)
wordGuess.displayWord(wordDisplay)

var chances = (letterArray.length + Math.floor(.5 * letterArray.length))
//console.log("chances= " + chances)

function questionPrompt() {
    if (chances >= 0) {
        inquirer.prompt([
            {
                type: "input",
                message: "Guess a letter",
                name: "userGuess"
            }
        ]).then(function (response) {
            var userGuess = response.userGuess;
            console.log("You Guessed: " + response.userGuess)
            wordGuess.displayWord(userGuess)
            
            if(wordGuess.displayWord(userGuess)!= undefined){
            console.log(wordGuess.displayWord(userGuess))
            }
            chances--;
            questionPrompt()

        });
    }
    else {
        console.log("Out of Guesses :( \n YOU LOST");
    }
};


questionPrompt()


