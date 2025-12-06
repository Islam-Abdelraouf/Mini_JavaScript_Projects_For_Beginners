const quoteOutput = document.getElementById("quoteOutput");
const btnGenerateQuote = document.getElementById("btnGenerateQuote");
const qtyRemain = document.getElementById("qtyRemain");

btnGenerateQuote.addEventListener("click", generateQuote);

const quotes = [
    "Code a little every day and the hard things become habits.",
    "Perfection is a direction, not a starting point. Ship, then improve.",
    "You don't learn programming by reading code, you learn it by breaking it.",
    "Small projects finished beat big projects imagined.",
    "When you feel stuck, make the problem smaller and solve that.",
    "Great developers are just beginners who never stopped practicing.",
    "If it works, refactor it so future you will thank present you.",
    "Every bug is just hidden knowledge waiting to be learned.",
    "Typing code is easy, thinking clearly is the real work.",
    "Consistency beats motivation. Open the editor even on tired days.",
];

let usedIndexes = new Set();

function generateQuote() {
    if (usedIndexes.size >= quotes.length) usedIndexes.clear()
    let randIdx;

    do {
        randIdx = Math.floor(Math.random() * quotes.length);
    } while (usedIndexes.has(randIdx))

    usedIndexes.add(randIdx);

    const quote = quotes[randIdx];

    setQuoteWithFade_V1(quote);

    let remainQTY = quotes.length - usedIndexes.size;
    if (remainQTY == 0) remainQTY = quotes.length;
    qtyRemain.textContent = remainQTY;
}

const FADE_DURATION = 400;
function setQuoteWithFade_V1(newQuote) {

    quoteOutput.classList.remove("fade-in");
    quoteOutput.classList.add("fade-out");

    setTimeout(() => {
        quoteOutput.textContent = newQuote;

        quoteOutput.classList.remove("fade-out");
        quoteOutput.classList.add("fade-in");
    }, FADE_DURATION);
}

function setQuoteWithFade_V2(newQuote) {

    quoteOutput.classList.remove("fade-in");
    quoteOutput.classList.add("fade-out");

    quoteOutput.addEventListener("transitionend", function handler() {
        quoteOutput.removeEventListener("transitionend", handler);

        quoteOutput.textContent = newQuote;

        quoteOutput.classList.remove("fade-out");
        quoteOutput.classList.add("fade-in");

    });
}