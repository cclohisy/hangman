//var userGuess= "b"
//var hiddenLetter = "a"
function Letter(hiddenLetter) {
    this.hiddenLetter = hiddenLetter
    this.correctGuess = false
    this.letterGuess = function(){
        if(this.correctGuess === true){
            return this.hiddenLetter
        }
        else{
            return "_ "
        }
    }
    this.argCheck = function(userGuess){
        if(userGuess===this.hiddenLetter){
            this.correctGuess= true
        }
        else{
            this.correctGuess = false
        }
        console.log("\narg check result: " + this.correctGuess)
    }
}

module.exports = Letter

// var a = new Letter("a", false)
// var b = new Letter("b",false)

// console.log("argCheck a vs. a " + a.argCheck("a"))
// console.log("letterguess results : " + a.letterGuess())

// a.letterGuess()

// //console.log(b)
// console.log("argCheck b vs. a " + b.argCheck("a"))
// console.log("letterGuess results: " + b.letterGuess())
