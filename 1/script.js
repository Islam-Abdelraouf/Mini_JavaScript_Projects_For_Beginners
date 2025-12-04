const body = document.getElementsByTagName("body")[0];

function randomColor() {
    red = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);
    const randomColor = `RGB(${red},${green},${blue})`;
    return randomColor
}

function changeColor(colorName) {
    if (colorName === 'random') {
        body.style.backgroundColor = randomColor();
        return;
    }
    body.style.backgroundColor = colorName;
}
