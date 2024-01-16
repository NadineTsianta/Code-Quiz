let userHighscoreInput = document.querySelector('#initials');
let startBtnEl = document.querySelector('#start');
let submitBtnEl = document.querySelector('#submit');
let timerEl = document.querySelector('.timer');
let quizArea = document.querySelector("#start-screen");
let questionDivEl = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let endScreen = document.querySelector("#end-screen");
let finalSc = document.querySelector("#final-score");
let userScore = document.querySelector("#js-userScore");
let highScoresScreen = document.querySelector(".wrapper")





// A start button that when clicked a timer starts and the first question appears.
function quizPage() {
    resetScreen()
    questionDivEl.style.display = "block";
};

let currentQuestionIndex = 0;

function resetScreen() {
    quizArea.style.display = "none";
    questionTitle.textContent = questions[currentQuestionIndex].question;

    choices.innerHTML = '';

    for (let i = 0; i < questions[currentQuestionIndex].answers.length; i++) {
        let choiceElement = document.createElement('button');
        choiceElement.textContent = questions[currentQuestionIndex].answers[i].text;
        choiceElement.setAttribute('class', 'choice-btn')

        choices.appendChild(choiceElement);

    }

};

updateScore();
// When answer is clicked, the next question appears


choices.addEventListener("click", function (event) {


    let userOption = event.target.textContent;

    updateScore(userOption);
    displayCurrentScore();

    currentQuestionIndex++;



    if (currentQuestionIndex < questions.length) {
        resetScreen();
    }
    else {
        quizEnd();
    };

    event.stopPropagation()
});


function displayCurrentScore() {
    userScore.textContent = `Your score: ${score}`;
}


function checkAnswer(userOption) {

    let correctAnswer = questions[currentQuestionIndex].answers.find(answer => answer.correct).text;
    return userOption === correctAnswer;

};

function quizEnd() {
    questionDivEl.style.display = "none";
    finalSc.textContent = `Your final score is ${score}`
    endScreen.style.display = "block";

    submitBtnEl.addEventListener('click', function () {

        window.location.href = '../starter/highscores.html'
    });


};


let highScores = [];

function finalScore() {
    let userInitials = userHighscoreInput.value.trim();
    localStorage.setItem('userInitials', userInitials);


    let userScoreObject = {
        initials: userInitials,
        score: score
    };

    highScores.push(userScoreObject);

    displayHighScores();

    resetQuiz();
};

function displayHighScores() {
    let storedUserInitials = localStorage.getItem('userInitials');
    userHighscoreInput.textContent = storedUserInitials;

    let highScoresList = document.getElementById('highscores');

    highScoresList.innerHTML = '';

    for (let i = 0; i < highScores.length; i++) {
        let scoreEntry = document.createElement('li');
        scoreEntry.textContent = highScores[i].initials + ' :' + highScores[i].score;
        highScoresList.appendChild(scoreEntry);
    };
    
}

function resetQuiz() {
    currentQuestionIndex = 0

}

// If the answer clicked was incorrect then subtract time from the clock

// The quiz should end when all questions are answered or the timer reaches 0.

startBtnEl.addEventListener("click", quizPage);


// When the game ends, it should display their score and give the user the ability to save their initials and their score
//  Capture user Initials -> Submit button
submitBtnEl.addEventListener("click", finalScore)