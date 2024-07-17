let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".img");
const result = document.querySelector(".btn p");
const bg = document.querySelector(".btn");
const userScorePara = document.querySelector(".userScore");
const computerScorePara = document.querySelector(".computerScore");

const comChoice = () => {
    let option = ["Paper", "Scissor", "Rock"];
    const randomNum = Math.floor(Math.random() * 3);
    return option[randomNum];
}

const draw_Game = () => {
    console.log("Game is draw");
    result.innerText = "Game is draw!";
    result.style.backgroundColor="rgb(0, 108, 185)";

}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.textContent = userScore;
        result.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        result.style.backgroundColor="rgb(0, 156, 0)";
        
    } else {
        computerScore++;
        computerScorePara.textContent = computerScore;
        result.innerText = `Computer Wins! ${compChoice} beats ${userChoice}`;
        result.style.backgroundColor="rgba(255, 33, 33, 0.8)";

    }
}

const playGame = (userChoice) => {
    const compChoice = comChoice();
    console.log("User choice:", userChoice);
    console.log("Computer choice:", compChoice);
    if (userChoice === compChoice) {
        draw_Game();
    } else {
        let userWin = true;
        if (userChoice === "Paper") {
            userWin = compChoice === "Rock";
        } else if (userChoice === "Rock") {
            userWin = compChoice === "Scissor";
        } else {
            userWin = compChoice === "Paper";
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
