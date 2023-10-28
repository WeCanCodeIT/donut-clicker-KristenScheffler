const donutCountDisplay = document.getElementById("donutCount");
const clickButton = document.getElementById("clickButton");
const autoClickerCountDisplay = document.getElementById("autoClickerCount");
const autoClickerCostDisplay = document.getElementById("autoClickerCost");
const buyAutoClickerButton = document.getElementById("buyAutoClickerButton");
const activateAutoClickersButton = document.getElementById("activateAutoClickers");
const resetButton = document.getElementById("resetButton");

function resetGame() {
    autoClickerCount = 0;
    autoClickerCost = 100;
    donutCount = 0;
    updateAutoClickerCount();
    updateAutoClickerCost();
    updateDonutCount();
}

resetButton.addEventListener("click", resetGame);

const costIncreasePercentage = 10;

let donutCount = 0;
let autoClickerCount = 0;
let autoClickerCost = 100;

function updateDonutCount() {
    donutCountDisplay.textContent = donutCount;
}

function updateAutoClickerCount() {
    autoClickerCountDisplay.textContent = autoClickerCount;
}

function updateAutoClickerCost() {
    autoClickerCostDisplay.textContent = autoClickerCost;
}

function updateAutoClickerButtonState() {
    if (donutCount >= autoClickerCost) {
        buyAutoClickerButton.disabled = false;
        buyAutoClickerButton.textContent = `Buy Auto-Clicker (${autoClickerCost} Donuts)`;
    } else {
        buyAutoClickerButton.disabled = true;
        buyAutoClickerButton.textContent = `Not enough Donuts`;
    }
}

function purchaseAutoClicker() {
    if (donutCount >= autoClickerCost) {
        donutCount -= autoClickerCost;
        autoClickerCount++;
        autoClickerCost = Math.round(autoClickerCost * 1.1);
        updateDonutCount();
        updateAutoClickerCount();
        updateAutoClickerCost();
        updateAutoClickerButtonState();
    }
}

function activateAutoClickers() {
    const clickRate = 1;
    donutCount += autoClickerCount * clickRate;
    updateDonutCount();
}

buyAutoClickerButton.addEventListener("click", purchaseAutoClicker);

clickButton.addEventListener("click", () => {
    donutCount++;
    updateDonutCount();
    updateAutoClickerButtonState();
});

setInterval(activateAutoClickers, 1000);

updateDonutCount();
updateAutoClickerCount();
updateAutoClickerCost();
updateAutoClickerButtonState();






