var userHighscoreInput = document.querySelector('#initials');
var startBtnEl = document.querySelector('#start');
var submitBtnEl = document.querySelector('#submit');
var timerEl = document.querySelector('.timer');
var quizArea = document.querySelector("#start-screen");
var divEl = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var questionInOrder = document.querySelector("#questions");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");

var firstChoicebtn
var secondChoicebtn

// A start button that when clicked a timer starts and the first question appears.
function quizPage (){
    resetScreen()
    document.getElementById("questions").style.display = "block";   


}

function resetScreen(){
    quizArea.style.display ="none";
    questionTitle.textContent = questions[0].question;
    choices.textContent = questions[0].answers[0].text;
    choices.textContent = questions[0].answers[1].text

}



// When answer is clicked, the next question appears

// If the answer clicked was incorrect then subtract time from the clock

// The quiz should end when all questions are answered or the timer reaches 0.

startBtnEl.addEventListener("click", quizPage);


// When the game ends, it should display their score and give the user the ability to save their initials and their score
//  Capture user Initials -> Submit button
submitBtnEl.addEventListener("click", finalScore )