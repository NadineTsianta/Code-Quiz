// A start button that when clicked a timer starts and the first question appears.
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




// Questions contain buttons for each answer.

var question1 = {

    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "Javascript"],
    correctAnswer: "'<script>'"
};

var question2 = {
    question: "Which is the correct place to insert a JavaScript?",
    options: ["The <body> section", "The  <head> section"],

    correctAnswer: "The <body> section"
}

var question3 = {
    question: "What is the correct syntax for referring to an external script called 'xxx.js' ?",
    options: ["<script href='xxx.js'", "<script src='xxx.js'"],

    correctAnswer: "<script src='xxx.js'"

}






// When answer is clicked, the next question appears

// If the answer clicked was incorrect then subtract time from the clock

// The quiz should end when all questions are answered or the timer reaches 0.

startBtnEl.addEventListener("click", quizQuestions)

//  Capture user Initials -> Submit button
submitBtnEl.addEventListener("click", function (event) {

})

// When the game ends, it should display their score and give the user the ability to save their initials and their score