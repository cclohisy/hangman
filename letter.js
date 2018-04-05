
function Letter(hiddenLetter) {
    this.hiddenLetter = hiddenLetter
    this.correctGuess = false
    this.letterGuess = function () {
        if (this.correctGuess === true) {
            return this.hiddenLetter
        }
        else {
            return "_ "
        }
    }
    this.argCheck = function (userGuess) {

        if (userGuess === this.hiddenLetter) {
            this.correctGuess = true
            return true
        }

    }
}

module.exports = Letter
