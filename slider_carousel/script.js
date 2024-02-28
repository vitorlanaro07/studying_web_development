
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".slide").offsetWidth;
const carouselChildren = [...carousel.children];
let actualCard;

let isPressed = false, startX, startScrollLeft;
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carousel.draggable = false;





dragging = (event) => {
    if (!isPressed) {return}
    carousel.scrollLeft = startScrollLeft + (startX - event.pageX);
    // console.log(firstCardWidth, carousel.scrollWidth, carousel.scrollLeft, carouselChildren.length*350);
    console.log(carousel.scrollLeft, carousel.scrollWidth - carousel.offsetWidth);
}

mousePressed = (event) => {
  isPressed = true;
  event.preventDefault();
  carousel.style.cursor = "grabbing";
  startX = event.pageX;
  startScrollLeft = carousel.scrollLeft;
}

mouseUnpressed = () => {
  isPressed = false;
  carousel.style.cursor = "grab";
}

mouseeEnter = () => {
  carousel.style.cursor = "grab";
  carousel.addEventListener("mousedown", mousePressed);
  carousel.addEventListener("mouseup", mouseUnpressed);
}

mouseLeave = () => {
  carousel.style.cursor = "auto";
  if (!isPressed) {return}
  isPressed = false; 
}

infiniteScroll = () => {
  if (carousel.scrollLeft === 0) {
    carousel.scrollLeft = 1490;
    console.log(carousel.scrollLeft);
  } else if (Math.round(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
    carousel.scrollLeft = 1160;
    console.log(carousel.scrollLeft);
  }
}

carousel.addEventListener("mousemove", dragging)

carousel.addEventListener("mouseenter", mouseeEnter);

carousel.addEventListener("mouseleave", mouseLeave);

carousel.addEventListener("scroll", infiniteScroll);