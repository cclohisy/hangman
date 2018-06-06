var Letter = require("./letter.js")

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
            wordDisplay = wordDisplay + "" + this.newLetterArray[i].letterGuess();
        }
        //determine if user won... kinda working?       
        if (wordDisplay.includes("_") === false) {
            return "YOU WON!! YOU ARE SO SMART"
        }
        else{
            return "Guess this word: " + wordDisplay

        }
    }

}

module.exports = Word