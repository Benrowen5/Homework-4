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





var startQuiz = function() {
    console.log("quiz started")
};


startButtonEl.addEventListener("click", startQuiz)