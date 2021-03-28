var displayTimer = document.getElementById("timer");
var titleQuestion = document.getElementById("titleQuestion");
var startButton = document.getElementById ("start");
var intro = document.getElementById("intro");
var answerlist = document.getElementById("answerlist");
var answer1  = document.getElementById("A1")
var answer2  = document.getElementById("A2")
var answer3  = document.getElementById("A3")
var answer4  = document.getElementById("A4")
var response = document.getElementById("response");
var count = localStorage.getItem("count");
var enterInfor = document.getElementById("enterinfo");
var timeLeft =90;
var saveplayerbutton = document.getElementById("saveplayer");
var saveplayer = localStorage.getItem("playername");

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
    event.preventDefault()  
    displayTimerCountdown();
    startButton.remove();
    intro.remove();
    titleQuestion.innerText = "What is the first name of the Deputy Headmistress of Hogwarts?" ;
    answerlist.style.display="flex";
    answer1.innerText = "Minerva";
    answer2.innerText = "Melissa";
    answer3.innerText = "Monster";
    answer4.innerText = "Mommy";
    answer1.addEventListener("click", function(){
    count++;
    localStorage.setItem("count", count);
    response.style.display="flex";
    response.innerText = "Correct";
    question2 ();
    })
    answer2.addEventListener("click", function(){
        timeLeft-=10;
        response.style.display="block"
        response.innerText = "Wrong"
        question2 ();
        }) 
        answer3.addEventListener("click", function(){
            timeLeft-=10;
            response.style.display="block"
            response.innerText = "Wrong"
            question2 ();
            })   
            answer4.addEventListener("click", function(){
                timeLeft-=10;
                response.style.display="block"
                response.innerText = "Wrong"
                question2 ();
                }) 
                
}

function question2 () {
    setTimeout(function(){
        response.remove(); 
    }, 1000);
    titleQuestion.innerText = "Who was the Half Blood Prince?" ;
    answerlist.style.display="flex";
    answer1.innerText = "Alastor Moody";
    answer2.innerText = "Argus Filch";
    answer3.innerText = "Severus Snape";
    answer4.innerText = "Harry Potter";
    
    answer3.addEventListener("click", function(){
        count++;
        localStorage.setItem("count", count);
        response.innerText = "Correct";
        answerlist.appendChild(response);
        question3 ();
        })
        answer2.addEventListener("click", function(){
            timeLeft-=10;
            response.innerText = "Wrong";
            answerlist.appendChild(response);
            question3 ();
            }) 
            answer1.addEventListener("click", function(){
                timeLeft-=10;
                response.innerText = "Wrong";
                answerlist.appendChild(response);
                question3 ();
                })   
                answer4.addEventListener("click", function(){
                    timeLeft-=10;
                    response.innerText = "Wrong";
                    answerlist.appendChild(response);
                    question3 ();
                    }) 
}

function question3 () {
    setTimeout(function(){
        response.remove(); 
    }, 1000);
    response.style.display="hidden";
    titleQuestion.innerText = "Who hates Corned Beef Sandwiches?" ;
    answerlist.style.display="flex";
    answer1.innerText = "Ron Weasley";
    answer2.innerText = "Neville Longbottom";
    answer3.innerText = "Seamus Finnigan";
    answer4.innerText = "Vincent Crab";
    answer1.addEventListener("click", function(){
        count++;
        localStorage.setItem("count", count);
        response.innerText = "Correct";
        answerlist.appendChild(response);
        question4 ();
        })
        answer2.addEventListener("click", function(){
            timeLeft-=10;
            response.innerText = "Wrong";
                answerlist.appendChild(response);
            question4 ();
            }) 
            answer3.addEventListener("click", function(){
                timeLeft-=10;
                response.innerText = "Wrong";
                answerlist.appendChild(response);
                question4 ();
                })   
                answer4.addEventListener("click", function(){
                    timeLeft-=10;
                    response.innerText = "Wrong";
                    answerlist.appendChild(response);
                    question4 ();
                    }) 
}

function question4 () {
    setTimeout(function(){
        response.remove(); 
    }, 1000);
    response.style.display="hidden";
    titleQuestion.innerText = "Who loves the smell of freshly mown grass?" ;
    answerlist.style.display="flex";
    answer1.innerText = "Lavender Brown";
    answer2.innerText = "Hermione Granger";
    answer3.innerText = "Luna Lovegood";
    answer4.innerText = "Romilda Vane";
    answer2.addEventListener("click", function(){
        count++;
        localStorage.setItem("count", count);
        response.innerText = "Correct";
        answerlist.appendChild(response);
        gameOver ();
        })
        answer1.addEventListener("click", function(){
            timeLeft-=10;
            response.innerText = "Wrong";
                answerlist.appendChild(response);
            gameOver ();
            }) 
            answer3.addEventListener("click", function(){
                timeLeft-=10;
                response.innerText = "Wrong";
                answerlist.appendChild(response);
                gameOver ();
                })   
                answer4.addEventListener("click", function(){
                    timeLeft-=10;
                    response.innerText = "Wrong";
                    answerlist.appendChild(response);
                    gameOver ();
                    }) 
}

// timer that counts down 90 seconds
function displayTimerCountdown () {
    // declare starting time
    event.preventDefault()
    timeLeft = 90;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            displayTimer.textContent = timeLeft + " seconds remaining";
            timeLeft--;
        } else {
            displayTimer.textContent = "Time is Up!";
            clearInterval(timeInterval);
            timeLeft=0;
            gameOver();
            // record win/lose
            // display scorepage
        } 
     }, 1000);

}

function gameOver () {
    var playername = document.querySelector("#player").value;
    
    answerlist.remove();
    response.remove();
    titleQuestion.innerText = "Quiz Complete";
    intro.textContent="Your score is: "+ count + " correct answers out of 4 " + " with " + timeLeft + " seconds remaining!"; 
    titleQuestion.appendChild(intro);
    enterInfor.style.display="flex";    
    saveplayerbutton.addEventListener("click", function(event){
       event.preventDefault();
       localStorage.setItem("playername", playername) 
    });
}


startButton.addEventListener("click", startGame);
answer1.addEventListener("click", answer1);
answer2.addEventListener("click", answer2);
answer3.addEventListener("click", answer3);
answer4.addEventListener("click", answer4);
// init ();
// displayTimerCountdown();