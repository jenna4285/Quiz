var displayTimer = document.getElementById("timer");
var titleQuestion = document.getElementById("titleQuestion");
var startButton = document.getElementById ("start");
var intro = document.getElementById("intro");
var answerlist = document.getElementById("answerlist");
var answer1  = document.getElementById("A1")
var answer2  = document.getElementById("A2")
var answer3  = document.getElementById("A3")
var answer4  = document.getElementById("A4")
// function loadpage () {
//     if (answerlist.style.display === "none") {
//         answerlist.style.display = "block";
//     } else {
//         answerlist.style.display = "none";
//     }
// }

// function init () {
//     loadpage ();
// }

function startGame (event) {
    displayTimerCountdown();
    startButton.remove();
    intro.remove();
    titleQuestion.innerText = "What is the first name of the Deputy Headmistress of Hogwarts?" ;
    answerlist.style.display="flex";
    answer1.innerText = "Minerva";
    answer2.innerText = "Melissa";
    answer3.innerText = "Monster";
    answer4.innerText = "Mommy";
}



function question2 () {
    titleQuestion.innerText = "Who was the Half Blood Prince?" ;
    answerlist.style.display="flex";
    answer1.innerText = "Alastor Moody";
    answer2.innerText = "Argus Filch";
    answer3.innerText = "Severus Snape";
    answer4.innerText = "Harry Potter";
}

// timer that counts down 90 seconds
function displayTimerCountdown () {
    // declare starting time
    var timeLeft = 90;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            displayTimer.textContent = timeLeft + " seconds remaining";
            timeLeft--;
        } else {
            displayTimer.textContent = "Time is Up!";
            clearInterval(timeInterval);
            // record win/lose
            // display scorepage
        } 
     }, 1000);

}

startButton.addEventListener("click", startGame);
// init ();
// displayTimerCountdown();