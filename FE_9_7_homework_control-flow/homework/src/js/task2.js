let totalPrize = 0;
let randomArrLength = 5;
let prize1 = 10;
let prize2 = 5;
let prize3 = 2;
let currentPrize = 0;
let prizeK = 1;
let confirmation = confirm("Do you want to play a game?");
if (confirmation === true) {
    play()
}else if (confirmation === false){
    alert("'You did not become a millionaire, but can.")
}
function play() {
    let random = Math.floor(Math.random()*randomArrLength);
    console.log("Random = " + random);
    let attempt = 3;
    while (attempt > 0){
        if (attempt === 3) {
            currentPrize = prize1*prizeK;
        }
        if (attempt === 2) {
            currentPrize = prize2*prizeK;
        }
        if (attempt === 1) {
            currentPrize = prize3 * prizeK;
        }
        let number = +prompt("enter a number from 0 to" + randomArrLength +
        "\n" + "attempts left : " + attempt +
        "\n" + "Total Prize : " + totalPrize +
        "\n" + "Possible win :" + currentPrize);
        if (number === random) {
            break;
        }else{
            attempt--;
        }
    }
    totalPrize += currentPrize;
    if (attempt === 0) {
        let confirmation = confirm(
            "Thank you for a game. Your prize is: " + "0" +
            "\n" + "Do you want to play again?");
        if (confirmation === true) {
            totalPrize = 0;
            randomArrLength = 5;
            currentPrize = 0;
            prizeK = 1;
            play()
        }else {

        }
    }else {
        ask();
    }
}
function ask() {
    let confirmation = confirm("Congratulation" + "\n" + "your prize is" + currentPrize + "\n" +
        "Do you want to continue?");
    if (confirmation === true) {
        randomArrLength = randomArrLength*2;
        prizeK = prizeK*2;
        play()
    }else{
        alert("Thank you for a game. Your prize is :" + totalPrize);
        let conf = confirm("Do you want to play again?");
        if (conf === true) {
            play()
        }else{
            alert("Good Bye!")
        }
    }
}