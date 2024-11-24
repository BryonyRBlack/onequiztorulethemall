/**
 * Code to interact with the DOM
 */
let hobbitButton = document.getElementById("hobbit-btn");
let lotrButton = document.getElementById("lotr-btn");
let tropButton = document.getElementById("trop-btn");
let buttons = document.getElementsByClassName("type-btn");
let rules = document.getElementById("rules");
let quiz = document.getElementById("quiz");
let question = document.getElementById("question");
let answerButtons = document.getElementById("answers");
let nextButton = document.getElementById("next");
let loadPage = document.getElementById('body')


/**
 * Wait for the DOM to finish loading before running
 * Add event to select the game difficulty settings
 */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            const gameType = this.getAttribute("data-type");
            if (gameType === "hobbit") {
                questions = hobbitQuestions;
            }else if (gameType === "lotr") {
                questions = lotrQuestions;
            }else if (gameType === "trop"){
                questions = tropQuestions
            }
            showQuestion(gameType);
        })
    }
})

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    loadPage.classList.add("hide");
    quiz.classList.remove("hide");
    resetQuiz();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    question.innerHTML = questionNo + ". " + currentQuestion.question;
        currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetQuiz() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(event){
    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < hobbitQuestions.length){
        handleNextButton();
    }else {
        startQuiz();
    }
})

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < hobbitQuestions.length){
        showQuestion();
    }else{
        finalScore();
    }
}

function finalScore() {
    resetQuiz();
    question.innerHTML = `You scored ${score}`;
}

/*Questions*/
const hobbitQuestions = [
    {question: "Which two dwarves were Thorin's nephews?",
        answers: [
            {text: "Balin and Dwalin", correct: false},
            {text: "Oin and Oin", correct: false},
            {text: "Kili and Fili", correct: true},
            {text: "Dori and Nori", correct: false},
        ]
    },
    {
        question: "Question 2",
        answers: [ 
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: true},
            {text: "Answer4", correct: false},
        ]
    },
    {
        question: "Question 3",
        answers: [ 
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: true},
            {text: "Answer4", correct: false},
        ]
    },
    {
        question: "Question 4",
        answers: [ 
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: true},
            {text: "Answer4", correct: false},
        ]
    },
    {
        question: "Question 5",
        answers: [ 
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: true},
            {text: "Answer4", correct: false},
        ]
    },
    {
        question: "Question 6",
        answers: [ 
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: true},
            {text: "Answer4", correct: false},
        ]
    },
    {
        question: "Question 7",
        answers: [ 
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: true},
            {text: "Answer4", correct: false},
        ]
    },
    {
        question: "Question 8",
        answers: [ 
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: true},
            {text: "Answer4", correct: false},
        ]
    },
    {
        question: "Question 9",
        answers: [ 
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: true},
            {text: "Answer4", correct: false},
        ]
    },
    {
        question: "Question 10",
        answers: [ 
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: true},
            {text: "Answer4", correct: false},
        ]
    }
]

const lotrQuestions = [
    {question: "What was the name of the Spider that Sam killed?",
        answers: [
            {text: "Ungoliant", correct: false},
            {text: "Faramir", correct: false},
            {text: "Shelob", correct: true},
            {text: "Azog", correct: false},
        ]
    },
    {
        question: "Question 2",
        answers: [ 
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: true},
            {text: "Answer4", correct: false},
        ]
    },
    {
        question: "Question 3",
        answers: [ 
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: true},
            {text: "Answer4", correct: false},
        ]
    },
    {
        question: "Question 4",
        answers: [ 
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: true},
            {text: "Answer4", correct: false},
        ]
    },
    {
        question: "Question 5",
        answers: [ 
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: true},
            {text: "Answer4", correct: false},
        ]
    },
    {
        question: "Question 6",
        answers: [ 
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: true},
            {text: "Answer4", correct: false},
        ]
    },
    {
        question: "Question 7",
        answers: [ 
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: true},
            {text: "Answer4", correct: false},
        ]
    },
    {
        question: "Question 8",
        answers: [ 
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: true},
            {text: "Answer4", correct: false},
        ]
    },
    {
        question: "Question 9",
        answers: [ 
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: true},
            {text: "Answer4", correct: false},
        ]
    },
    {
        question: "Question 10",
        answers: [ 
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: true},
            {text: "Answer4", correct: false},
        ]
    }
]

const tropQuestions = [
    {question: "What name has Charlie Vickers character not introduced himself as?",
        answers: [
            {text: "Halbrand", correct: false},
            {text: "Annatar", correct: false},
            {text: "Sauron", correct: true},
            {text: "King of the Southlands", correct: false},
        ]
    },
    {
        question: "Question 2",
        answers: [ 
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: true},
            {text: "Answer4", correct: false},
        ]
    },
    {
        question: "Question 3",
        answers: [ 
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: true},
            {text: "Answer4", correct: false},
        ]
    },
    {
        question: "Question 4",
        answers: [ 
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: true},
            {text: "Answer4", correct: false},
        ]
    },
    {
        question: "Question 5",
        answers: [ 
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: true},
            {text: "Answer4", correct: false},
        ]
    },
    {
        question: "Question 6",
        answers: [ 
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: true},
            {text: "Answer4", correct: false},
        ]
    },
    {
        question: "Question 7",
        answers: [ 
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: true},
            {text: "Answer4", correct: false},
        ]
    },
    {
        question: "Question 8",
        answers: [ 
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: true},
            {text: "Answer4", correct: false},
        ]
    },
    {
        question: "Question 9",
        answers: [ 
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: true},
            {text: "Answer4", correct: false},
        ]
    },
    {
        question: "Question 10",
        answers: [ 
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: true},
            {text: "Answer4", correct: false},
        ]
    }
]