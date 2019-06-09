//creating a constructor function to define the questions
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

//creating a function to see if the user choice is equal to the answer (button click is user choice)
Question.prototype.correctAnswer = function (choice) {
    return choice === this.answer;
}

//========================creating a constructor function defining the games operations ========================================================================================================================
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

//creating a prototype function to recieve the correct question
Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}

//creating a prototype function that determines if the game is over
Quiz.prototype.isEnded = function () {
    return this.questions.length === this.questionIndex;
}

//creating a constructor prototype
Quiz.prototype.guess = function (answer) {
    this.questionIndex++;

    if (this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }
}
//======================================================== writing functions to work with the app interface====================================================================

//making a function to populate the page with the questions
function populate() {
    if(quiz.isEnded()) {
        //showScores();
    }
    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
    }
}
//creating a questions array variable that matches the constructor function layout
var questions = [
    new Question("What year did the Cleveland Cavaliers win the NBA finals?", ["2015", "2016", "2017", "2018"], "2016"),
    new Question("What year did the American Civil War End?", ["1852", "1878", "1843", "1865"], "1865"),
    new Question("Is Puerto Rico is a part of the United States?", ["true", "false"], "false"),
    new Question("What is the element for Iron?", ["Fe", "Se", "F", "De"], "Fe"),
    new Question("How many hours are in a year?", ["365", "1870", "8760", "8500"], "8760")
];

//creating a object for the Quiz constructor function
var quiz = new Quiz(questions);

populate();