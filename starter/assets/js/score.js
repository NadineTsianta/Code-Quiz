let score = 0;

function updateScore() {
    let userOption = // Get the user's selected option, you need to obtain this value in your code.
    let correctAnswer = questions[currentQuestionIndex].answers.find(answer => answer.correct).text;

    if (userOption === correctAnswer) {
        score++;
    } else {
        score--;
    }

    // Ensure the score doesn't go below zero
    score = Math.max(score, 0);
}