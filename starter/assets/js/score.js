let score = 0;

function updateScore(userOption) {
     let correctAnswer = questions[currentQuestionIndex].answers.find(answer => answer.correct).text;

    if (userOption === correctAnswer) {
        score++;
    } else {
        score--;

    }

    // Ensure the score doesn't go below zero
    score = Math.max(score, 0);
console.log(score);
};

