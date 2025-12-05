
const textInput = document.getElementById("textInput")
const liveToast = document.getElementById('liveToast')
const messenger = document.getElementById("messenger")
const cardHeader = document.getElementById("cardHeader")

const btnToastKiller = document.getElementById("btnToastKiller")
const btnTextChecker = document.getElementById("btnTextChecker")

btnToastKiller.addEventListener("click", killToast)
btnTextChecker.addEventListener("click", checkText)

let toastTimeout = 3000;

function fireToast(message, color) {
    messenger.innerText = message;
    messenger.style.color = color;
    cardHeader.style.backgroundColor = color;

    liveToast.classList.add("is-visible");

    if (toastTimeout) {
        clearTimeout(toastTimeout);
    }

    setTimeout(() => {
        resetMessanger();
        killToast();
    }, toastTimeout);
}


function killToast() {
    resetMessanger();
    liveToast.classList.remove("is-visible");
}

function checkText() {

    const text = textInput.value;

    if (text.length == 0) {
        textInput.focus();
        return;
    }

    const cleaned = text.toLowerCase();
    console.log('cleaned', cleaned);
    const reversed = reverseText(cleaned);

    if (reversed === cleaned) {
        fireToast("P A L I N D R O M E", 'green');
    } else {
        fireToast("TRY AGAIN LATER!", 'red');
    }
}

function reverseText(string) {
    return string.split("").reverse().join("");
}

function resetMessanger() {
    textInput.value = "";
    textInput.focus();
}

document.addEventListener("DOMContentLoaded", () => {
    resetMessanger();
});