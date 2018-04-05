
var Letter = require("./letter.js")

// var letterArray = ["h", "e", "y"]
// var wordDisplay = ""

function Word() {
    this.newLetterArray = []
    this.makeArray = function (guessWord) {
        for (var i = 0; i < guessWord.length; i++) {
            var newLetter = new Letter(guessWord[i])
            this.newLetterArray.push(newLetter)
        }
    }

    this.displayWord = function (userGuess) {
        wordDisplay = ""
        for (var i = 0; i < this.newLetterArray.length; i++) {
            this.newLetterArray[i].argCheck(userGuess)
            console.log("just added: "+ this.newLetterArray[i].argCheck(userGuess))
            wordDisplay = wordDisplay + "" + this.newLetterArray[i].letterGuess();
            console.log(this.newLetterArray[i].correctGuess)

        }
        this.resultMessage = function () {
            for (var i = 0; i < this.newLetterArray.length; i++) {
                if (this.newLetterArray[i].correctGuess) {
                    console.log("YOU GOT ONE")
                }
                else {
                    console.log("WRONG!")  //\nYou have "+ chances +" guesses left"
                }
            }
        }
        console.log("Guess this word: " + wordDisplay)

    }
}
//newLetter.letterGuess()

// var wordGuess = new Word()
// console.log(wordGuess)
// wordGuess.makeArray(letterArray)
// wordGuess.displayWord()

module.exports = Word