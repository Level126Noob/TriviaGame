//creating a constructor function to define the way the questions
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

//creating a constructor prototype with an if statement to log the score, then go to the next question.
Quiz.prototype.guess = function (answer) {
   if (this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}
//======================================================== writing functions to work with the app interface====================================================================
//making a function to populate the page with the questions
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;

        //creating a for loop to cycle through the choices.length (array from questions) and putting them in the span tag of choices set on the buttons.
        for(var i = 0; i< choices.length; i++) {
        var element = document.getElementById("choice" + i);
        element.innerHTML = choices[i];
        guess('btn' + i, choices[i]);
        }
        showProgress();
    }
};

function timeIt(secs, elem) {
var element = document.getElementById(elem);
element.innerHTML = "Seconds left: " + secs;

secs--;
var timer = setTimeout('timeIt('+secs+',"'+elem+'")', 1000);

if (secs === 0){
    showScores();
}
if (secs < 10){
    document.getElementById("timer").style.color = "red";
    document.getElementById("btn0").style.backgroundColor = 'red';
    document.getElementById("btn1").style.backgroundColor = 'red';
    document.getElementById("btn2").style.backgroundColor = 'red';
    document.getElementById("btn3").style.backgroundColor = 'red';
}
}

//creating an onclick function that links the button clicked to the user guess variable, then seeing if the game is over calling the populate function again
function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

//creating a function to show the progress of how many questions you've answered to how many you have left.
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

//a function to show the score of how many you got correct
function showScores() {
    //creating a new html page to show results
    var gameOverHTML = "<h1>Results</h1>"
    gameOverHTML += "<h2 id='score'>Your score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

//creating a questions array variable that matches the constructor function layout
var questions = [
    new Question("What year did the Cleveland Cavaliers win the NBA finals?", ["2015", "2016", "2017", "2018"], "2016"),
    new Question("What year did the American Civil War End?", ["1852", "1878", "1843", "1865"], "1865"),
    new Question("When Luigi from Mario Brothers isn't fighting bad guys, what occupation does he hold?", ["plumber", "mechanic", "none", "musician"], "mechanic"),
    new Question("What is the element for Iron?", ["Fe", "Se", "F", "De"], "Fe"),
    new Question("How many hours are in a year?", ["365", "1870", "8760", "8500"], "8760")
];

//creating a object for the Quiz constructor function
var quiz = new Quiz(questions);

timeIt(60, "timer");
populate();