var inquirer = require("inquirer");

var Word = require("./word")

var wordOptions = ["hey", "unicorn", "balloon",""]
var randomMax = wordOptions.length
var randomIndex = (Math.floor(Math.random() * randomMax) )
var wordChoiceRandom = wordOptions[randomIndex]
var wordDisplay = ""



var letterArray = Array.from(wordChoiceRandom)
console.log(letterArray)

var wordGuess = new Word()
// console.log(wordGuess)
wordGuess.makeArray(letterArray)
wordGuess.displayWord(wordDisplay)

var chances = 5;

var questionPrompt = function () {
    if (chances > 0) {
        //display starting wordDisplay?
        // wordGuess.displayWord()
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
            //wordGuess.resultMessage()- not working right 

            // if (userGuess.argCheck()){
            // console.log("correct")
            // }

            // else 
            // console.log("WRONG")
            
            chances--;

            questionPrompt();
        });
    }
    else {
        console.log("Out of Guesses :( ");
    }
};

questionPrompt()


