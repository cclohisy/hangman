
var Letter = require("./letter.js")

var letterArray = ["h", "e", "y"]
var wordDisplay = ""

function Word() {
    this.newLetterArray = []
    this.makeArray = function (guessWord) {
        for (var i = 0; i < letterArray.length; i++) {
            var newLetter = new Letter(letterArray[i])
            this.newLetterArray.push(newLetter)

        }
    }

    this.displayWord = function () {
        wordDisplay = ""
        for (var i = 0; i < this.newLetterArray.length; i++) {
            // console.log("hi " + this.newLetterArray[i].letterGuess())
            this.newLetterArray[i].argCheck()
            console.log(this.newLetterArray[i].argCheck())

            //         if (this.newLetterArray[i].correctGuess === true) {
            wordDisplay = wordDisplay + "" + this.newLetterArray[i].letterGuess();
            //         }
            //         else {
            //             wordDisplay += "_ ";
            //         }
        }
        // console.log(this.newLetterArray)
        console.log("wordDisplay " + wordDisplay)

    }
}
//newLetter.letterGuess()

var wordGuess = new Word()
// console.log(wordGuess)
wordGuess.makeArray(letterArray)
wordGuess.displayWord()

module.exports = Word