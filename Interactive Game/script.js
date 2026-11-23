// Questions and answers
let questions = [
    {
        question: "What color are the stars in Tinashe's eyes on the album?",
        answers: ["Gold", "Pink", "Red"],
        correct: "Pink"
    },
    {
        question: "What is the best song on the album",
        answers: ["Flashbacks", "Pillow Fight", "Crash Out"],
        correct: "Flashbacks"
    },
    {
        question: "What day of September did the album release",
        answers: ["1st", "27th", "23rd"],
        correct: "23rd"
    }
];

// Keep track of the game
let number = 0;
let points = 0;
let finished = false;
let started = false;

// Start the game
function startGame() {
    number = 0;
    points = 0;
    finished = false;
    started = true;

    document.getElementById("score").innerHTML = "Score: 0";

    showQuestion();
}

// Show the current question
function showQuestion() {

    if (number >= questions.length) {
        document.getElementById("question").innerHTML = "Game Over!";

        document.getElementById("answers").innerHTML = "";

        document.getElementById("message").innerHTML =
            "You scored " + points + " out of " + questions.length + "!";

        finished = true;
        return;
    }

    document.getElementById("question").innerHTML =
        questions[number].question;

    document.getElementById("answers").innerHTML = "";
    document.getElementById("message").innerHTML = "";

    // Create a button for each answer
    for (let i = 0; i < questions[number].answers.length; i++) {

        let button = document.createElement("button");

        button.innerHTML = questions[number].answers[i];

        let selectedAnswer = questions[number].answers[i];

        button.onclick = function() {
            checkAnswer(selectedAnswer);
        };

        document.getElementById("answers").appendChild(button);
    }
}

// Check the answer
function checkAnswer(answer) {

    if (!started || finished) {
        return;
    }

    if (document.getElementById("message").innerHTML !== "") {
        return;
    }

    if (answer === questions[number].correct) {
        points = points + 1;

        document.getElementById("message").innerHTML = "Correct! 🎉";
    } else {
        document.getElementById("message").innerHTML =
            "Wrong! Try again next time.";
    }

    document.getElementById("score").innerHTML = "Score: " + points;
}

// Go to the next question
function nextQuestion() {

    if (!started || finished) {
        return;
    }

    if (document.getElementById("message").innerHTML === "") {
        document.getElementById("message").innerHTML =
            "Choose an answer first!";
        return;
    }

    number = number + 1;

    showQuestion();
}