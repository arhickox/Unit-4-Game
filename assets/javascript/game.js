$(document).ready(function () {

    
    //variables
    var button1Score = 0;
    var button2Score = 0;
    var button3Score = 0;
    var Button4Score = 0;
    var wins = 0;
    var losses = 0;
    var playerScore = 0;
    var goalScore = 0;

    //Reset Game
    function gameReset() {
        goalScore = 0;
        playerScore = 0;
        document.getElementById("score").innerHTML = 0;
        randomValue();
    }

    //Assign Buttons values/ Generate Goal Value
    function randomValue() {
        button1Score = Math.floor(Math.random() * 12) + 1;
        button2Score = Math.floor(Math.random() * 12) + 1;
        button3Score = Math.floor(Math.random() * 12) + 1;
        button4Score = Math.floor(Math.random() * 12) + 1;
        console.log("1: " + button1Score);
        console.log("2: " + button2Score);
        console.log("3: " + button3Score);
        console.log("4: " + button4Score);
        goalScore = Math.floor(Math.random() * 102) + 19;
        document.getElementById("goalNumber").innerHTML = goalScore;
    }

    //check if Win/Loss
    function outcomeCheck() {
        if (playerScore == goalScore) {
            alert("You Win");
            wins++;
            document.getElementById("wins").innerHTML = wins;
            gameReset();
        } else if (playerScore > goalScore) {
            alert("You Lose");
            losses++
            document.getElementById("losses").innerHTML = losses;
            gameReset();
        }
    }

    //Button 1 click
    $("#button1").click(function () {
        playerScore += button1Score;
        document.getElementById("score").innerHTML = playerScore;
        outcomeCheck();
    });

    //Button 2 click
    $("#button2").click(function () {
        playerScore += button2Score;
        document.getElementById("score").innerHTML = playerScore;
        outcomeCheck();
    });

    //Button 3 click
    $("#button3").click(function () {
        playerScore += button3Score;
        document.getElementById("score").innerHTML = playerScore;
        outcomeCheck();
    });

    //Button 4 click
    $("#button4").click(function () {
        playerScore += button4Score;
        document.getElementById("score").innerHTML = playerScore;
        outcomeCheck();
    });

    randomValue();


});
