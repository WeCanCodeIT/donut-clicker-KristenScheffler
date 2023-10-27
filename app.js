const donutCountDisplay = document.getElementById("donutCount");
const autoClickerCountDisplay = document.getElementById("autoClickerCountButton");
const autoClickerCostDisplay = document.getElementById("autoClickerCostButton");
const clickButton = document.getElementById("clickButton");
const buyAutoClickerButton = document.getElementById("buyAutoClickerButton");
const activateAutoClickersButton = document.getElementById("activateAutoClickers");

let donutCount = 0;
let autoClickerCount = 0;
let autoClickerCost = 100;
const costIncreasePercentage = 10;


function updateDonutCount() {
    donutCountDisplay.textContent = donutCount;
}

function updateAutoClickerCount () {
    autoClickerCostDisplay.textContent = autoClickerCost;
}

function updateAutoClickerCost() {
    autoClickerCostDisplay.textContent = autoClickerCost;
}

function updateAutoClickerButtonState() {
    if (donutCount >= autoClickerCost) {
        buyAutoClickerButton.disabled = false;
        buyAutoClickerButton.textContent = `Buy Auto Clicker (${autoClickerCost} Donuts)`;
    } else {
        buyAutoClickerButton.disabled = true;
        buyAutoClickerButton.textContent = `Buy Auto Clicker (${autoClickerCost} Donuts)`;
    }
}

function purchaseAutoClicker() {
    if (donutCount >= autoClickerCost) {
        donutCount -= autoClickerCost;
        autoClickerCount++;
        autoClickerCost = Math.round(autoClickerCost * (1 + costIncreasePercentage / 100)); // Increase cost
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

clickButton.addEventListener("click", () => {
    donutCount++;
    updateDonutCount();
    updateAutoClickerButtonState();
});

buyAutoClickerButton.addEventListener("click", purchaseAutoClicker);

activateAutoClickersButton.addEventListener("click", activateAutoClickers);

updateAutoClickerButtonState();
updateAutoClickerCost();
updateDonutCount();

setInterval(activateAutoClickers, 1000);

function activateAutoClickers() {
    const clickRate = 1;
    donutCount += autoClickerCount * clickRate;
    updateDonutCount();
    console.log("Auto Clicker Count:", autoClickerCount);
}



