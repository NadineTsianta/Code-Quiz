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
var userScore = document.querySelector("#js-userScore");
var highScoresScreen = document.querySelector(".wrapper")





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
        var choiceElement = document.createElement('button');
        choiceElement.textContent = questions[currentQuestionIndex].answers[i].text;
        choiceElement.setAttribute('class', 'choice-btn')

        choices.appendChild(choiceElement);

    }

};

updateScore();
// When answer is clicked, the next question appears


choices.addEventListener("click", function (event) {


    var userOption = event.target.textContent;

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

function quizEnd(){
    window.location.href = '../starter/highscores.html'
}



let highScores = [];

function finalScore() {
    var userInitials = userHighscoreInput.value;
    var userScoreObject = {
        initials: userInitials,
        score: score
    };

    highScores.push(userScoreObject);

    displayHighScores();

    resetQuiz();
}

function displayHighScores() {
    let highScoresList = document.getElementById('highscores');

    highScoresList.innerHTML ='';

    for (let i = 0; i < highScores.length; i++) {
        let scoreEntry = document.createElement('li');
        scoreEntry.textContent = highScores[i].initials + ' :' + highScores[i].score;
        highScoresList.appendChild(scoreEntry);
    };
    finalScore();
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