//this is a list of variables created to connect with html and javascript functions
//with the help of queryselectors and get elementbyid 
//
var startButton = document.getElementById("startbutton");
var rightAnswer1 = document.getElementById("correctbtn1");
var rightAnswer2 = document.getElementById("correctbtn2");
var rightAnswer3 = document.getElementById("correctbtn3");
var wrongAnswer1 = document.getElementById("wrongbtn1");
var wrongAnswer2 = document.getElementById("wrongbtn2");
var wrongAnswer3 = document.getElementById("wrongbtn3");
var wrong1 = document.getElementById("wrong1");
var wrong2 = document.getElementById("wrong2");
var wrong3 = document.getElementById("wrong3");
var timerEl = document.getElementById("timer");
var timeButton = document.getElementById("time");
var answerDisplay = document.querySelector("#answervalue");
var scoreCount = document.getElementById("scorecount")
var submitBtn = document.getElementById("submitbutton")
var userInput = document.getElementById("usertext")
var inputDisplay = document.getElementById("userdisplay")
var restartBtn = document.getElementById("reload")
var highscoresDis = document.getElementById("highscores")
var highScoreBox = document.getElementById("highscorebox")
var viewHigh = document.getElementById("viewhighscore")
var eraseScoresBtn = document.getElementById("erase")
var storedInput = localStorage.getItem("inputvalue")
var lastQanswer = false
var count = 30
var sCount = 0

 
//an event listener was given to the removeEl function to get the quiz and timer started 
//also lets you know when you ran out of time
startButton.addEventListener("click", removeEl)

 function removeEl(countDown){
    document.getElementById("start").remove()
    document.getElementById("question1").classList.remove("hidden");
   
var countDown= setInterval(function () {
      count -= 1 ;
      timerEl.textContent = count;
        
    if (count === 0) {
         clearInterval(countDown);
         alert("You ran out of time")
        document.querySelector("#outterbox").classList.add("hidden");
        }
        else if (lastQanswer){
          clearInterval(countDown);
        }
        
    
    }, 1000);
}
//this eveListener tells the function when to make the highscores visible
viewHigh.addEventListener("click", function(){
  document.getElementById("highscorebox").classList.remove("hidden");
  document.getElementById("options").classList.add("hidden");
  document.getElementById("answervalue").remove();
  document.getElementById("reload").classList.remove("hidden");
  document.getElementById("start").remove()
  

})
//the submit button allows the user to submit their quiz score along with their name
submitBtn.addEventListener("click", function(){
  inputDisplay.textContent = userInput.value;
  highscoresDis.append(" (" + userInput.value + " = " + sCount + "pts) ");
   localStorage.setItem("inputvalue", highscoresDis.textContent);
  document.getElementById("highscorebox").classList.remove("hidden");
  document.getElementById("options").classList.add("hidden");
  document.getElementById("answervalue").remove();
})
if(storedInput) {
    highscoresDis.textContent = storedInput
  }
  //restart button allows the user to start the quiz over again
restartBtn.addEventListener("click", function () {
  window.location.reload();
})
//rease scores button allows the user to remove every scored saved into local storage
eraseScoresBtn.addEventListener("click", function(){
  localStorage.removeItem("inputvalue")
  window.location.reload()
})


// these event listeners and functions lets the user know
//their answer was correct and adds 5 points to their score
rightAnswer1.addEventListener("click", function(){
    document.getElementById("question2").classList.remove("hidden");
    document.getElementById("question1").remove()
    answerDisplay.textContent = "Correct!"
    sCount += 5 
    scoreCount.textContent = sCount;
    })
   
   
   rightAnswer2.addEventListener("click",function(){
    document.getElementById("question3").classList.remove("hidden");
    document.getElementById("question2").remove()
    answerDisplay.innerText = "Correct!"
    sCount += 5 
    scoreCount.textContent = sCount;
  })
   rightAnswer3.addEventListener("click",function(){
       document.getElementById("options").classList.remove("hidden");
       document.getElementById("question3").remove()
       document.getElementById("reload").classList.remove("hidden")
       answerDisplay.innerText = "Correct!"
       lastQanswer = true
    sCount += 5 
    scoreCount.textContent = sCount;
      })

    //these events and functions lets the user know
    //their answer was wrong, also reduces time by 5 seconds
    
    
    
    wrongAnswer1.addEventListener("click", function(){
    document.getElementById("question2").classList.remove("hidden");
    document.getElementById("question1").remove()
    answerDisplay.textContent = "Wrong!"
    count -= 5 ;
   } )
   
   wrongAnswer2.addEventListener("click", function(){
    document.getElementById("question3").classList.remove("hidden");
    document.getElementById("question2").remove()
    answerDisplay.textContent = "Wrong!"
    count -= 5 ;
   } )

   wrongAnswer3.addEventListener("click", function(){
    document.getElementById("options").classList.remove("hidden");
    document.getElementById("reload").classList.remove("hidden")
    document.getElementById("question3").remove()
    answerDisplay.textContent = "Wrong!"
    lastQanswer = true
    
    
   } )

 

   
   wrong1.addEventListener("click", function(){
    document.getElementById("question2").classList.remove("hidden");
    document.getElementById("question1").remove()
  answerDisplay.textContent = "Wrong!"
  count -= 5 ;
   } )
   
   wrong2.addEventListener("click", function(){
    document.getElementById("question3").classList.remove("hidden");
    document.getElementById("question2").remove()
  answerDisplay.textContent = "Wrong!"
  count -= 5 ;
   } )

   wrong3.addEventListener("click", function(){
    document.getElementById("options").classList.remove("hidden");
    document.getElementById("reload").classList.remove("hidden")
    document.getElementById("question3").remove()
    answerDisplay.textContent = "Wrong!"
    lastQanswer = true
    
    
   } )

   