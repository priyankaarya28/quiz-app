const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        answer: "Leonardo da Vinci"
    }
];

let currentQuestion = 0;
let score = 0;
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

function displayQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    optionsContainer.innerHTML = "";
    
    q.options.forEach(option => {
        const button = document.createElement("div");
        button.classList.add("option");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selected) {
    const options = document.querySelectorAll(".option");
    const correctAnswer = questions[currentQuestion].answer;

    options.forEach(option => {
        if(option.textContent === correctAnswer) {
            option.classList.add("correct");
        }
        if(option.textContent === selected && selected !== correctAnswer) {
            option.classList.add("wrong");
        }
        option.onclick = null;
    });

    if(selected === correctAnswer) {
        score++;
    }

    nextBtn.style.display = "block";
    scoreElement.textContent = `Score: ${score}/${questions.length}`;
}

function nextQuestion() {
    currentQuestion++;
    if(currentQuestion < questions.length) {
        displayQuestion();
        nextBtn.style.display = "none";
        scoreElement.textContent = "";
    } else {
        questionElement.textContent = "Quiz Completed!";
        optionsContainer.innerHTML = "";
        nextBtn.style.display = "none";
        scoreElement.textContent = `Final Score: ${score}/${questions.length}`;
    }
}

// Start the quiz
displayQuestion();