/**
 * Questions
 * */
/**
 * Hobbit Questions for first difficulty
 */
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
        question: "Which character from The Lord of the Rings trilogy did not return in the The Hobbit movies?",
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
        question: "What was the name of the stone that Thorin wanted to retrieve?",
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

/**
 * Lord of the Rings questions for second difficulty
 */
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
            {text: "The Prancing Pony", correct: true},
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
        question: "In the films, who arrived first for the council of Elrond?",
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
            {text: "99th", correct: false},
            {text: "111th", correct: true},
        ]
    }
]

/**
 * The Rings of Power questions for final difficulty
 */
const tropQuestions = [
    {question: "What name did Charlie Vickers' character first introduce himself with?",
        answers: [
            {text: "Halbrand", correct: true},
            {text: "Annatar", correct: false},
            {text: "Sauron", correct: false},
            {text: "Isildur", correct: false},
        ]
    },
    {
        question: "Míriel suffered with what after the eruption of Mount Doom?",
        answers: [ 
            {text: "Broken Arm", correct: false},
            {text: "Blindness", correct: true},
            {text: "Lost Leg", correct: false},
            {text: "Stab Wound", correct: false},
        ]
    },
    {
        question: "Which characters originally found the Stranger?",
        answers: [ 
            {text: "Nori and Poppy", correct: true},
            {text: "Galdrial and Halbrand", correct: false},
            {text: "Bronwyn and Arondir", correct: false},
            {text: "Elrond and Durin IV", correct: false},
        ]
    },
    {
        question: "What is the opening line of episode 1?",
        answers: [ 
            {text: "In a hole in the ground there lived a hobbit.", correct: false},
            {text: "The world is changed.", correct: false},
            {text: "Nothing is evil in the beginning.", correct: true},
            {text: "There was Eru, the One, who in Arda is called Ilúvatar", correct: false},
        ]
    },
    {
        question: "When is Rings of Power set?",
        answers: [ 
            {text: "Fourth Age", correct: false},
            {text: "Second Age", correct: true},
            {text: "Third Age", correct: false},
            {text: "First Age", correct: false},
        ]
    },
    {
        question: "The Southlands becomes what famous setting in The Lord of the Rings?",
        answers: [ 
            {text: "The Shire", correct: false},
            {text: "Rivendale", correct: false},
            {text: "Gondor", correct: false},
            {text: "Mordor", correct: true},
        ]
    },
    {
        question: "Which character does not appear in The Lord of the Rings?",
        answers: [ 
            {text: "Galdrial", correct: false},
            {text: "Isildur", correct: false},
            {text: "Gil-galad", correct: true},
            {text: "The Stranger", correct: false},
        ]
    },
    {
        question: "What is the name of Galadrial's brother?",
        answers: [ 
            {text: "Arondir", correct: false},
            {text: "Finrod", correct: true},
            {text: "Celebrimbor", correct: false},
            {text: "Eärien", correct: false},
        ]
    },
    {
        question: "What is Nori's surname?",
        answers: [ 
            {text: "Baggins", correct: false},
            {text: "Harfoot", correct: false},
            {text: "Proudfellow", correct: false},
            {text: "Brandyfoot", correct: true},
        ]
    },
    {
        question: "Who did Galadrial believe Halbrand to be?",
        answers: [ 
            {text: "King of Numenor", correct: false},
            {text: "King of Gondor", correct: false},
            {text: "King of the Southlands", correct: true},
            {text: "King under the Mountain", correct: false},
        ]
    }
]

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

/**
 * This function first removes the difficulty setting page
 * The function then shows the current question and answer options, reacting when an answer is selected
 */
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

/**
 *After the next button is clicked, this returns to quiz to the question
 */
function resetQuiz() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

/**
 *Function adds a class to the answer selected, so the css styling is applied
 *Function increases score if correct
 Next button is displayed
 */
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

/**
 * Code for the next button, on if another question should be shown or if final screen
 */
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

/**
 * Code for increasing the score
 */
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