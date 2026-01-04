const quizData = [
    {
        question: "Which country has the most natural lakes?",
        options: ["USA", "Canada", "Paris", "India"],
        answer: "Canada"
    },
    {
        question: "What is the only food that never spoils?",
        options: ["Salt", "Rice", "Honey", "Vinegar"],
        answer: "Honey"
    },
    {
        question: "Which planet spins the fastest in the solar system?",
        options: ["Earth", "Jupiter", "Mars", "Venus"],
        answer: "Jupiter"
    },
    {
        question: "What was the first soft drink in space?",
        options: ["Coca-Cola", " Pepsi", "Sprite", "Fanta"],
        answer: "Coca-Cola"
    },
    {
        question: "Which animal can sleep for up to 3 years?",
        options: ["Sloth", "Koala", "Turtle", "Snail"],
        answer: "Snail"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        document.getElementById("result").innerText = "Correct!";
        score++;
    } else {
        document.getElementById("result").innerText = "Wrong!";
    }
    document.getElementById("score").innerText = `Score: ${score}`;
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
            document.getElementById("result").innerText = "";
        } else {
            document.getElementById("question").innerText = "Quiz Completed!";
            document.getElementById("options").innerHTML = "";
            document.getElementById("result").innerText = `Final Score: ${score}/${quizData.length}`;
        }
    }, 1000);
}

loadQuestion();
