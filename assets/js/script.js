var quizQuestions = [
    {
        name: 1,
        question: "True or false: HTML is an acronym for 'HyperText Markdown Langauge'?",
        answers: [
            "true",
            "false"
        ],
        correctAns: "false"
    },
    {
        name: 2,
        question: "In an HTML document, which of the following should be located in the document 'head'?",
        answers: [
            "Any links to Stylesheets",
            "The header element",
            "Text for the footer element",
            "Granny Smith apples"
        ],
        correctAns: "Any links to Stylesheets"
    },
    {
        name: 3,
        question: "this is question 3?",
        answers: [
            "yes",
            "no",
            "maybe"
        ],
        correctAns: "yes"
    },
    {
        name: 4,
        question: "This is question 4?",
        answers: [
            "yes",
            "no",
            "maybe"
        ],
        correctAns: "yes"
    },
    {
        name: 5,
        question: "This is question 5?",
        answers: [
            "yes",
            "no",
            "maybe"
        ],
        correctAns: "yes"
    }
];
var startButtonEl = document.querySelector("#start-btn");
var cardBodyEl = document.getElementById("#card-body");
var question1 = document.createElement('form');
var timerEl = document.getElementById('countdown');

// function to show timer
function countdown () {
    var timeLeft = 10;
    var timer = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;            
        } else {
            timerEl.textContent = ' ';
            clearInterval(timer);
            alert("time is up!");
        }
    }, 1000);
};

// function to display the first question
var displayQuestion = function () {
    // hide start button to allow for question to show up
};

// start quiz function for when start button is clicked.
var startQuiz = function() {
    // countdown();
    startButtonEl.addEventListener("click", displayQuestion);
    
};


startButtonEl.addEventListener("click", startQuiz);