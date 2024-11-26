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
let loadPage = document.getElementById('body');
let returnSection = document.getElementById("return");
let returnBtn = document.getElementById("return-btn");


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
        increaseScore();
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

function increaseScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function finalScore() {
    resetQuiz();
    question.innerHTML = `You scored ${score}`;
    document.getElementById("score-area").classList.add("hide");
    returnSection.classList.remove("hide");
}

/*Questions*/
const hobbitQuestions = [
    {question: "Which two dwarves were Thorin's nephews?",
        answers: [
            {text: "Balin and Dwalin", correct: false},
            {text: "Oin and Gloin", correct: false},
            {text: "Kili and Fili", correct: true},
            {text: "Dori and Nori", correct: false},
        ]
    },
    {
        question: "What is the full name of The Hobbit?",
        answers: [ 
            {text: "The Hobbit, a Bilbo Baggins Tale", correct: false},
            {text: "The Hobbit, or There and Back Again", correct: true},
            {text: "The Hobbit, An Unexpected Journey", correct: false},
            {text: "The Hobbit, Journey to Lonely Mountain", correct: false},
        ]
    },
    {
        question: "Which film character did not exist in the novel?",
        answers: [ 
            {text: "Bombur", correct: false},
            {text: "Beorn", correct: false},
            {text: "Bain", correct: false},
            {text: "Tauriel", correct: true},
        ]
    },
    {
        question: "Who eventually did kill Smaug",
        answers: [ 
            {text: "Thorin", correct: false},
            {text: "Bard", correct: true},
            {text: "Bilbo", correct: false},
            {text: "Gandolf", correct: false},
        ]
    },
    {
        question: "Which character from The Lord of the Rings trilogy, did not return in the The Hobbit movies?",
        answers: [ 
            {text: "Aragon", correct: true},
            {text: "Legolas", correct: false},
            {text: "Frodo", correct: false},
            {text: "Galadrial", correct: false},
        ]
    },
    {
        question: "Which of these was not a member of Thorin's company?",
        answers: [ 
            {text: "Kili", correct: false},
            {text: "Balin", correct: false},
            {text: "Nori", correct: false},
            {text: "Durin ", correct: true},
        ]
    },
    {
        question: "What was the name of the stone that Thorin wanted to retrive?",
        answers: [ 
            {text: "Arkenstone", correct: true},
            {text: "Palantíri", correct: false},    
            {text: "Elfstone", correct: false},
            {text: "Master Stone of Osgiliath", correct: false},
        ]
    },
    {
        question: "What does Bilbo name his sword?",
        answers: [ 
            {text: "Orcrist", correct: false},
            {text: "Glamdring", correct: false},
            {text: "Narsil", correct: false},             
            {text: "Sting", correct: true},
        ]
    },
    {
        question: "What is the name of Thorin's sister?",
        answers: [ 
            {text: "Disa", correct: false},
            {text: "Hildr", correct: false},
            {text: "Dis", correct: true},
            {text: "Eir", correct: false},
        ]
    },
    {
        question: "What colour is Bilbo's handkerchief?",
        answers: [ 
            {text: "Brown", correct: false},
            {text: "Green with blue dots", correct: true},
            {text: "Blue and green stripes", correct: false},
            {text: "Blue with yellow dots", correct: false},
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
        question: "Which wizard was not involved in war against Sauron?",
        answers: [ 
            {text: "Gandolf", correct: false},
            {text: "Pallando", correct: true},
            {text: "Saruman", correct: false},
            {text: "Radagast", correct: false},
        ]
    },
    {
        question: "Which actor can be seen breaking a toe?",
        answers: [ 
            {text: "Orlando Bloom", correct: false},
            {text: "Sean Bean", correct: false},
            {text: "Mirando Otto", correct: false},
            {text: "Viggo Mortensen", correct: true},
        ]
    },
    {
        question: "What is the name of the pub that Frodo and friends visit?",
        answers: [ 
            {text: "The Dancing Dragon", correct: false},
            {text: "The Prancing Poney", correct: true},
            {text: "The Hungry Horse", correct: false},
            {text: "The Drowning Duck", correct: false},
        ]
    },
    {
        question: "How many rings did Sauron make?",
        answers: [ 
            {text: "1", correct: false},
            {text: "20", correct: true},
            {text: "9", correct: false},
            {text: "17", correct: false},
        ]
    },
    {
        question: "Who was the only cast member to meet J. R. Tolkein?",
        answers: [ 
            {text: "Christopher Lee", correct: true},
            {text: "Ian Mkellen", correct: false},
            {text: "Elijah Wood", correct: false},
            {text: "Andy Serkis", correct: false},
        ]
    },
    {
        question: "In the book, who saved Frodo from the Nine?",
        answers: [ 
            {text: "Arwen", correct: false},
            {text: "Glorfindel", correct: true},
            {text: "Aragon", correct: false},
            {text: "Merry", correct: false},
        ]
    },
    {
        question: "In the films, who arrived firsr for the council of Elrond?",
        answers: [ 
            {text: "Boromir", correct: true},
            {text: "Legolas", correct: false},
            {text: "Grimli", correct: false},
            {text: "Gandalf", correct: false},
        ]
    },
    {
        question: "What is the name of the pony that joins the Fellowship?",
        answers: [ 
            {text: "Dapple", correct: false},
            {text: "Asfaloth", correct: false},
            {text: "Bill", correct: true},
            {text: "Shadowfax", correct: false},
        ]
    },
    {
        question: "What birthday was Bilbo celebrating?",
        answers: [ 
            {text: "100th", correct: false},
            {text: "75th", correct: false},
            {text: "99", correct: false},
            {text: "111th", correct: true},
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