var timer = null;
var progressBar = null; 
var timerStopped = false;
var progressBarWidth = 1;
var progressBarData = 1;
var progressBarEndWidth = 0;
var totalTime = 0;
var timeLeft = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var inWork = true;
var isClicked = false;

window.onload = function()
{
  var sessionTime = document.getElementById("sessionTime");
  var currentTime = document.getElementById("workTime").innerText;
  convertToClockForm(currentTime * 60);
  totalTime = currentTime * 60;
  sessionTime.innerHTML = hours + ":" + minutes + ":" + seconds;
  progressBarEndWidth = currentTime * 60;

}

function handleClockTime(clockType, operation)
{
  if(!inWork)
  {
    return;
  }
  var element = document.getElementById(clockType);
  var currentVal = parseInt(element.innerHTML);
  if(operation === 'raise')
    {
      currentVal += 1;    
    }
  else{
    currentVal -= 1;
    if(currentVal <= 1)
      {
        currentVal = 1;
      }
  }
  element.innerHTML = currentVal;
  if(clockType === 'workTime'){
    convertToClockForm(currentVal * 60);
    document.getElementById("sessionTime").innerHTML = hours + ":" + minutes + ":" + seconds;
  }
}

function convertToClockForm(currentVal)
{

  seconds = currentVal % 60;
  minutes = Math.floor(currentVal / 60) % 60;
  hours = Math.floor(currentVal / 3600) % 60;
  seconds = seconds < 10 ? "0"+seconds : seconds;
  minutes = minutes < 10 ? "0"+minutes : minutes;
  hours = hours < 10 ? "0"+hours : hours;
}

function startSession()
{
  var sessionBtn = document.getElementById("sessionBtn");
  if(!isClicked)
    { 
      if(sessionBtn.classList.contains("btn-success"))
      {
        sessionBtn.classList.remove("btn-success");
      }
      else
      {
        sessionBtn.classList.remove("btn-warning");
      }
      sessionBtn.classList.add("btn-danger");
      sessionBtn.innerHTML="Stop Session";
     
     if(timer == null || timerStopped)
      {
        timer = setInterval(setTime, 1000);
        timerStopped = false;
      }
    }

  else{
      sessionBtn.classList.remove("btn-danger");
      sessionBtn.classList.add("btn-warning");
      sessionBtn.innerHTML="Resume Session";
      stopTimer();
  }
  isClicked = !isClicked;
}

function stopTimer()
{
   clearInterval(timer);
   clearInterval(progressBar);
   timerStopped = true;
}


function setTime()
{
     seconds--;
     if(seconds <= 0)
     {
      if(minutes > 0)
      {
        minutes--;
        seconds = 59;
      }
      else if(hours > 0)
      {
        hours--;
        minutes = 59;
        seconds = 59;
      }
    }

    seconds = seconds < 10 ? "0"+seconds : seconds;
    minutes = minutes < 10 && minutes.toString().length < 2 ? "0"+minutes : minutes;
    hours = hours < 10 && hours.length.toString() < 2 ? "0"+hours : hours;
    
    document.getElementById("sessionTime").innerHTML = hours + ":" + minutes + ":" + seconds;           
     if(hours == 0 && minutes == 0 && seconds == 0)
     {
      if(inWork)
      {
        alert("Time's up! BREAK TIME");
      }
      else{
        alert("Time's up! Back To Work!");
      }
        
        inWork = !inWork;
        resetClock();
     }
}

function resetClock()
{
  clearInterval(timer);
  if(inWork)
  {
     document.getElementById("sessionTime").innerHTML = document.getElementById("workTime").innerText;
     convertToClockForm(document.getElementById("workTime").innerText * 60);
     var sessionBtn = document.getElementById("sessionBtn");
     sessionBtn.disabled = false;
     timer = null;
     isClicked = false;
  }
  else
  {
     timer = setInterval(setTime, 1000);
     document.getElementById("sessionTime").innerHTML = document.getElementById("breakTime").innerText;
     convertToClockForm(document.getElementById("breakTime").innerText * 60);
     var sessionBtn = document.getElementById("sessionBtn");
     sessionBtn.classList.remove("btn-danger");
     sessionBtn.classList.add("btn-success");
     sessionBtn.innerHTML="Start Session";
     sessionBtn.disabled = true;
  }
 
}


function move() {
    var elem = document.getElementById("myBar"); 
    progressBar = setInterval(frame, 1000);

    function frame() {
        if (progressBarWidth >=  progressBarEndWidth) {
            clearInterval(progressBar);

        } else {
          timeLeft++;
          progressBarWidth = (timeLeft / totalTime) * progressBarEndWidth;
          elem.style.width = progressBarWidth + '%'; 
        }
    }
}