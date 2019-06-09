
//creating a constructor function
function Question(text, choice, answer) {
    this.text = text;
    this.choice = choice;
    this.answer = answer;
}


//creating a function prototype to see if the user interface matches the answer.
Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}

//constructor function defining variables
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

//writing a function to get the index of the current question and a guess
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

// function to check if the quiz has ended
Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
}

//function to check if the current answer is equal to the answer that is selected by the user
Quiz.prototype.guess = function(answer) {
    this.questionIndex++;
    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }
}

//a function to populate the question
function populate() {
    if(quiz.isEnded()) {
        //showScores();
    }
    else {
        //show question
        var element = document.getElementById('question')
        element.innerHTML = quiz.getQuestionIndex().text;
    }
}

var questions = [{
        question: "What year did the Cleveland Cavaliers win the NBA finals?\n (a) 2015\n\ (b) 2016\n\ (c) 2017 \n\ (d) 2018",

        answer: "b"
    },
    {
        question: "What year did the American Civil War End?\n (a) 1852\n\ (b) 1878\n\ (c) 1843\n\ (d)1865",

        answer: "d"
    },
    {
        question: "Puerto Rico is a part of the United States?\n (a) true\n\ (b) false",

        question: "b"
    },
    {
        question: "What is the element for Iron?\n (a)Fe\n\ (b)Se\n\ (c)F\n\ (d)De",

        answer: "a"
    },
    {
        question: "How many hours are in a year?\n (a) 365\n\ (b) 1870\n\ (c) 8760\n\ (d) 8500",

        answer: "d"
    }
]
var quiz = Quiz(questions[i]);

populate();
var score = 0;

for (var i = 0; i < questions.length; i++) {
    var response = window.prompt(questions[i].prompt)
    if (response == questions[i].answer) {
        score++
        alert("Correct")
    } else {
        alert("Incorrect!")
    }
}
alert("you got " + score + "/" + questions.length);