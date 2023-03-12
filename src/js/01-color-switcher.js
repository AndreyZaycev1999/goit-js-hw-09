const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function startColorSwitcher() {
    body.style.backgroundColor = getRandomHexColor();
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startButton.disabled = true;
};

function stopColorSwitcher() {
    startButton.disabled = false;
    clearInterval(timerId);
};

startButton.addEventListener("click", startColorSwitcher);
stopButton.addEventListener("click", stopColorSwitcher);