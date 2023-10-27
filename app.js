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

const donutCountDisplay = document.getElementById("donutCount");
const clickButton = document.getElementById("clickButton");
let donutCount = 0;


function updateDonutCount() {
    donutCountDisplay.textContent = donutCount;
}

clickButton.addEventListener("click", () => {
    donutCount++;
    updateDonutCount();
});

updateDonutCount();




