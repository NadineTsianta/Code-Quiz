var userHighscoreInput = document.querySelector('#initials');
var startBtnEl = document.querySelector('#start');
var submitBtnEl = document.querySelector('#submit');
var timerEl = document.querySelector('.timer');
var quizArea = document.querySelector("#start-screen");
var questionDivEl = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");


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
        var choiceElement = document.createElement('div');
        choiceElement.textContent = questions[currentQuestionIndex].answers[i].text;

        choices.appendChild(choiceElement);

    }

};


// When answer is clicked, the next question appears



// If the answer clicked was incorrect then subtract time from the clock

// The quiz should end when all questions are answered or the timer reaches 0.

startBtnEl.addEventListener("click", quizPage);


// When the game ends, it should display their score and give the user the ability to save their initials and their score
//  Capture user Initials -> Submit button
submitBtnEl.addEventListener("click", finalScore)