const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");
let span = document.querySelectorAll("span");
let pressed = false, xStart, scrollLeftStart;

dragging = (e) => {
    if (!pressed) {return};
    // container.scrollLeft = e.offsetX;
    console.log(xStart, scrollLeftStart, e.offsetX);
    
    container.scrollLeft = scrollLeftStart + (xStart - e.offsetX);
    span[0].innerHTML = Math.round(container.scrollLeft);
    // console.log(container.scrollLeft);
}

isPressed = (e) => {
    pressed = true;
    xStart = e.offsetX;
    scrollLeftStart = container.scrollLeft;
}

isNotPressed = () => {
    pressed = false;
}

container.addEventListener("mousedown", isPressed);
container.addEventListener("mouseup", isNotPressed);
container.addEventListener("mousemove", dragging);