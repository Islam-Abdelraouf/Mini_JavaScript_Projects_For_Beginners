
const startEl = document.getElementById("btnStart");
const pauseEl = document.getElementById("btnPause");
const resetEl = document.getElementById("btnReset");
const clockEl = document.getElementById("lblClock");

const spinner = document.getElementById("watch-outer");

startEl.addEventListener("click", startTimer);
pauseEl.addEventListener("click", togglePause);
resetEl.addEventListener("click", resetTimer);

document.addEventListener("keydown", (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        if (timerId === null && elapsed === 0 && !isPaused) {
            startTimer();
        } else {
            togglePause();
        }
    }
    if (e.key === 'l' || e.code === 'L') {
        addLap();
    }
    if (e.key === 'r' || e.code === 'R') {
        resetTimer();
    }
});

let timerId = null;
let startTime = 0;
let elapsed = 0;
let isPaused = false;

showTime(0);

function startTimer() {

    if (timerId !== null) return;

    startTime = Date.now() - elapsed;
    timerId = setInterval(tick, 10);
    spinner.classList.remove('remove-before');
    spinner.classList.remove('remove-after');
    startEl.disabled = true;
}

function tick() {
    elapsed = Date.now() - startTime;
    showTime(elapsed);
}

function togglePause() {
    //  get out if no active timer nor active pause state
    if (timerId === null && !isPaused) return;
    if (elapsed === 0) return;

    if (!isPaused) {
        //  PAUSE
        clearInterval(timerId);
        isPaused = true;
        timerId = null;
        spinner.classList.add('remove-before');
        spinner.classList.add('remove-after');
        pauseEl.textContent = "Resume";
    } else {
        //  RESUM
        isPaused = false;
        pauseEl.textContent = "Pause";
        startTimer();
    }


}

function resetTimer() {

    spinner.classList.add('remove-before');
    spinner.classList.add('remove-after');
    //  reset timer-related componantes
    clearInterval(timerId);
    timerId = null;
    //  reset screen time
    elapsed = 0;
    showTime(elapsed);
    //  reset pause state
    isPaused = false;
    pauseEl.textContent = "Pause";
    //  enable start button
    startEl.disabled = false;
}


function showTime(ms) {
    clockEl.textContent = formatTime(ms);
}

function formatTime(millseconds) {
    const mSec = millseconds % 1000;
    const totalSeconds = Math.floor(millseconds / 1000);
    const sec = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const min = totalMinutes % 60;
    const hr = Math.floor(totalMinutes / 60);
    return `${pad(hr, 2)}:${pad(min, 2)}:${pad(sec, 2)}.${pad(mSec, 3)}`;
}

function pad(num, width) {
    return num.toString().padStart(width, "0");
}

function keyDown(e) {

}


document.addEventListener('DOMContentLoaded', (event) => {
    spinner.classList.add('remove-before');
    spinner.classList.add('remove-after');
});