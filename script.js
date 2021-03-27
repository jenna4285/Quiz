var displayTimer = document.getElementById("timer");
var titleQuestion = document.getElementById("titleQuestion");


function init (
    
)


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

displayTimerCountdown();