/*Code to interact with the DOM*/
let hobbitButton = document.getElementById("hobbit-btn");
let lotrButton = document.getElementById("lotr-btn");
let tropButton = document.getElementById("trop-btn");
let rules = document.getElementById("rules");
let quiz = document.getElementById("quiz");
let question = document.getElementById("question");
let answerButtons = document.getElementById("answers");
let nextButton = document.getElementById("next");
let loadPage = document.getElementById('body')

hobbitButton.addEventListener("click", startQuiz);
lotrButton.addEventListener("click", startQuiz);
tropButton.addEventListener("click", startQuiz);

let currentQuestionIndex = 0;

function startQuiz() {
    loadPage.classList.add("hide");
    quiz.classList.remove("hide");
    showQuestion();
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