var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

var playerChoice

rock.onclick = function choseRock() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
    
    function computerPick() {
        var random = getRandomInt(3);
        var rock = 2;
        var paper = 1;
        var scissors = 0;
    
        if(random == rock) {
            console.log(rock, "rock");
        } else if (random == paper) {
            console.log(paper, "paper");
        } else {
            console.log(scissors, "scissors");
        }
    
        return random;
    }
    
    var computerChoice = computerPick();
    playerChoice = 2
    console.log("player chose rock", rock)

    var rock = 2;
    var paper = 1;
    var scissors = 0;

    if (computerChoice === rock) {
        alert("computer chose rock... you tied");
    } else if (computerChoice === paper) {
        alert("computer chose paper... you lost")
    } else if (computerChoice === scissors){
        alert("computer chose scissors... you won")
    }

}

paper.onclick = function chosePaper() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
    
    function computerPick() {
        var random = getRandomInt(3);
        var rock = 2;
        var paper = 1;
        var scissors = 0;
    
        if(random == rock) {
            console.log(rock, "rock");
        } else if (random == paper) {
            console.log(paper, "paper");
        } else {
            console.log(scissors, "scissors");
        }
    
        return random;
    }
    
    var computerChoice = computerPick();
    playerChoice = 1
    console.log("player chose paper", playerChoice);

    var rock = 2;
    var paper = 1;
    var scissors = 0;

    if (computerChoice === rock) {
        alert("computer chose rock... you won!");
    } else if (computerChoice === paper) {
        alert("computer chose paper... you tied")
    } else if (computerChoice === scissors){
        alert("computer chose scissors... you lost")
    }

}

scissors.onclick = function choseScissors() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
    
    function computerPick() {
        var random = getRandomInt(3);
        var rock = 2;
        var paper = 1;
        var scissors = 0;
    
        if(random == rock) {
            console.log(rock, "rock");
        } else if (random == paper) {
            console.log(paper, "paper");
        } else {
            console.log(scissors, "scissors");
        }
    
        return random;
    }
    
    var computerChoice = computerPick();
    playerChoice = 0
    console.log("player chose scissors", playerChoice);

    var rock = 2;
    var paper = 1;
    var scissors = 0;

    if (computerChoice === rock) {
        alert("computer chose rock... you lost");
    } else if (computerChoice === paper) {
        alert("computer chose paper... you won!")
    } else if (computerChoice === scissors) {
        alert("computer chose scissors... you tied")
    }

}
