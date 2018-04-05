var inquirer = require("inquirer");

var Word = require("./word")
//make word array
//split by , //function to split word into letter array
var userGuess = ""

var wordOptions = ["hey", "unicorn"]
var wordChoiceRandom = wordOptions[0]
var wordDisplay = ""

var letterArray = Array.from(wordChoiceRandom)
console.log(wordChoiceRandom)
console.log(letterArray)

var wordGuess = new Word()
// console.log(wordGuess)
wordGuess.makeArray(letterArray)
wordGuess.displayWord(wordDisplay)

var chances = 5;

var questionPrompt = function () {
    if (chances > 0) {
        //display starting wordDisplay?
        wordGuess.displayWord()
        inquirer.prompt([
            {
                type: "input",
                message: "Guess a letter" + "\n" + wordDisplay,
                name: "userGuess"
            }
        ]).then(function (response) {
            var userGuess = response.userGuess;
            console.log(response.userGuess)
            wordGuess.displayWord()
            //console.log(wordGuess)
            //if user guess = hidden letter / if argCheck returns true... 
            //console.log("correct")

            //else 
            //console.log("WRONG")
            //console.log("you have "+ chances +" guesses left")
            chances--;

            questionPrompt();
        });
    }
    else {
        console.log("Out of Guesses :( ");
    }
};

questionPrompt()


