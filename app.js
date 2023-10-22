const countTimer = document.getElementById("count-timer")
let timeLeft = 0
let autoClicker = 0

function renderTime(){
    countTimer.innerHTML = timeLeft
}

setInterval(function (){
    renderTime()
    timeLeft = timeLeft + autoClicker
}, 1000)



