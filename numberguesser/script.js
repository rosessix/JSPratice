let numberToGuess;

const generateNumber = () => {
    let minNumber = document.getElementById("min");
    let maxNumber = document.getElementById("max");
    alert("A new game has begun.");
    // return a int between min and max
    return Math.floor(Math.random() * (maxNumber.value - minNumber.value) + minNumber.value);
};

window.onload = () => {
    setTimeout(() => {
        numberToGuess = generateNumber();
    }, 300)
};

const guessNumber = () => {
    let myGuess = Number(document.getElementById("guess").value);
    let resultHTML = document.getElementById("result");
    console.log(numberToGuess < myGuess)
    if (myGuess > numberToGuess) {
        resultHTML.innerHTML = "Your guess it too high. Try again.";
    }

    if (myGuess < numberToGuess) {
        resultHTML.innerHTML = "Dang it, your guess is too low. Give it another shot!";
    }

    if (myGuess == numberToGuess) {
        console.log(3)
        resultHTML.innerHTML = "Hurray! You guessed it! I'll start another game.";
        setTimeout(() => {
            numberToGuess = generateNumber(); // innerHTML didnt update fast enough, so had to slow it down a bit
            resultHTML.innerHTML = ""
        }, 1000)
    }
}