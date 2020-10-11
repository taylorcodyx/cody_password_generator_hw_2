
// Creating a variable to house all the question info and possible answers as well as the correct answer
var questions = [
    {
        question: "Which HTML tag is used to define an internal style sheet?"
        choices: ["<css>", "<script>", "<style>", "<iss>"]
        answer: "<style>"
    },
    {
        question: "What does CSS stand for?"
        choices:["Custom Style Sheers", "Colorful Style Sheers", "Computer Style Sheets" , "Cascading Style Sheets"]
        answer: "Cascading Style Sheets"
    },
    {
        question: "Images in your webpage may have the following extensions except _____."
        choices: [".png", ".gif" ".jpg", ".psd"]
        answer: ".psd"
    },
    {
        question: "Which of the following tags is used to insert a blank line."
        choices: ["<br>", "<h1>", "<hr>", "<p>"]
        answer: "<br>"
    },
    {
        question: "What is a Syntax Error?"
        choices:["An error you will never find", "An error you find at the end when the program gives out a wrong value due to logic error", "An error caused by language rules being broken", "An error due to user error"]
        answer: "An error caused by language rules being broken"
    },
];

// Declaring variables for score
    var score = 0;
    var questionIndex = 0;

    

// Variables for timer 
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

// 15 seconds per question:
var secondsLeft = 76;
// Holds interval time
var holdInterval = 0;
// Penalty time if question answered incorrectly
var timePenalty = 10;
// Creates new element 
var ulCreate = document.createElement("ul");

// Triggers timer on button, shows user a display on the screen
timer.addEventListener("click", function () {
    // We are checking zero because its originally set to zero
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

