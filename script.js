//User and comp score
let userScore = 0;
let compScore = 0;

//Access the choices
const choices = document.querySelectorAll('.choice');   // Select all elements with class 'choice'

const msg = document.querySelector('#msg'); // Select the element with id 'msg'

const userScorePara = document.querySelector('#user-score'); // Select the element with id 'user-score'

const compScorePara = document.querySelector('#comp-score'); // Select the element with id 'comp-score'

//Generate comp choice
const geneCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randNum = Math.floor(Math.random() * 3);
    return options[randNum];
}

const drawGame = () => {
    console.log("It's a draw!");
    msg.innerText = "It's a draw!";
    msg.style.backgroundColor = "#081b31";
}

//Show the winner
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("User wins!");
        msg.innerText = `You win! ${userChoice} beats ${compChoice}! `;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("Comp wins!");
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}!`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    //Generate comp choice
    const compChoice = geneCompChoice();
    console.log("Comp choice = ", compChoice);

    //Compare user and comp choice
    if (userChoice === compChoice) {
        drawGame(); //Draw game
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            userWin = compChoice === 'paper' ? userWin = false : userWin = true;
        } else if (userChoice === 'paper') {
            userWin = compChoice === 'scissors' ? userWin = false : userWin = true;
        } else {
            userWin = compChoice === 'rock' ? userWin = false : userWin = true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

//Choose the userChoice- rock, paper, scissors
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})