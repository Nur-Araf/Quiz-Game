let questions = [
    {
        question: "What is the capital of Bangladesh?",
        answer: "Dhaka"
    },
    {
        question: "What is the largest city in Bangladesh?",
        answer: "Dhaka"
    },
    {
        question: "Which river is known as the lifeline of Bangladesh?",
        answer: "Padma"
    },
    {
        question: "What is the official language of Bangladesh?",
        answer: "Bengali"
    },
    {
        question: "When did Bangladesh gain independence?",
        answer: "1971"
    },
    {
        question: "What is the currency of Bangladesh?",
        answer: "Bangladeshi Taka"
    },
    {
        question: "What is the national flower of Bangladesh?",
        answer: "Water lily"
    },
    {
        question: "Which famous mangrove forest is found in Bangladesh?",
        answer: "Sundarbans"
    },
    {
        question: "What is the approximate population of Bangladesh?",
        answer: "Over 160 million"
    }
];


const point = document.getElementById(`js-point`);
const questionShow = document.getElementById(`js-question`);
const answerShow = document.getElementById(`js-answer`);
const enterBtn = document.getElementById(`js-enter`);
const inputAns = document.getElementById(`input-answer`);
const askQuestion = document.getElementById(`js-ask`);
const nextBtn = document.getElementById('js-nextQ');
const showBtn = document.getElementById('js-showA');
const givenAns = document.getElementById('js-givenA');
const video = document.getElementById('backgroundVideo');
video.playbackRate = 0.6;


let currentQuestionIndex = 0;
let playerPoint = 0;
let answerHide = ``;

function pointShow() {
    point.innerText = playerPoint;
}

enterBtn.addEventListener(`click`, () => {
    answerCheck();
});

askQuestion.addEventListener(`click`, () => {
    loadQuestion();
});

showBtn.addEventListener(`click`, () => {
    const blockAns = questionShow.innerText;
    if(blockAns == ``) {
        alert(`Ask Question First`);
    } else {
        givenAns.innerText = questions[currentQuestionIndex].answer;
    }
    
})

nextBtn.addEventListener('click', () => {
    const currentQuestion = questions[currentQuestionIndex];
    showError();
    
    // Check if the user has provided an answer to the current question
    function showError() {
        if (!inputAns.value.trim()) {
            alert(`Please answer the current question before moving to the next one.`);
            return; // Stop execution if the user hasn't answered the question
        }
    }

    // Check if the user has provided the correct answer to the current question
    const userAnswer = inputAns.value.toLowerCase().trim();
    const correctAnswer = currentQuestion.answer.toLowerCase().trim();
    const isCorrectAnswer = userAnswer === correctAnswer;

    // Update UI based on the correctness of the answer
    if (isCorrectAnswer) {
        answerShow.innerText = `Correct Answer`;
        playerPoint++;
        showError();
        pointShow();
        
        // Move to the next question
        currentQuestionIndex++;
        loadNextQuestion();
    } else {
        answerShow.innerText = `Wrong Answer. Try again!`;
    }
});

function loadNextQuestion() {
    // If there are remaining questions, load the next question
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        // If all questions have been answered, show an alert
        alert('You have answered all the questions!');
    }
}

function loadQuestion() {
    questionShow.innerText = questions[currentQuestionIndex].question;
    answerShow.innerText = '';
    inputAns.value = ''; 
}

function answerCheck() {
    const userAnswer = inputAns.value.toLowerCase();
    const ans = questions[currentQuestionIndex].answer.toLowerCase();
    if (userAnswer === ans) {
        answerShow.innerText = `Correct Answer`;
        playerPoint++;
        pointShow();
    } else {
        answerShow.innerText = `Wrong Answer`;
    }
}


