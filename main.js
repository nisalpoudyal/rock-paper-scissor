let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user_score");
let compScorePara = document.querySelector("#comp_score");

let userScore = 0;
let compScore = 0;

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    })
})


const playGame = (userChoice) => {
    // Generate computer choice
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        // Draw game
       drawGame(); 
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            // paper, scissor
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock, scissorj
            userWin = compChoice === "scissor" ? false : true; 
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

const drawGame = () => {
    msg.innerText = "Game was Draw, Play again.";
    msg.style.backgroundColor = "#041d38";
} 

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore ++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        compScore ++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const genCompChoice = () => {
    let options = ["rock", "paper", "scissor"];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}