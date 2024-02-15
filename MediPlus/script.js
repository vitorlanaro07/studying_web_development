// Nav Bar buttons dropdown




var button_pages = document.getElementsByClassName('dropdown');

function show_list(element){
        element.children[1].classList.toggle("showing");
}

function remove_list(element){
    element.children[1].classList.toggle("showing");
}


//nav bar transition

var navbar = document.querySelector("nav");

window.addEventListener("scroll", (event) => {
    let scroll = Math.round(this.scrollY);
    if (scroll > 205){
        navbar.classList.add("nav-sticky");
    } else{
        navbar.classList.remove("nav-sticky");
    }
})



// console.log(navbar.scrollTop);

// Slider Show 

show_slider(1);

var slideIndex = 1;

function plus_divs(n){
    show_slider(slideIndex += n);
    changing_slider_animation();
}


function show_slider(n){
    var i;
    var x = document.getElementsByClassName("slider");

    if (n < x.length){
        slideIndex = n;
    }
    if (n > x.length){
        slideIndex = 1;
    }

    if (n < 1){
        slideIndex = x.length;
    }

    for (i = 0; i < x.length; i++){
        x[i].style.display = 'none';
        x[slideIndex-1].style.display = 'block';
    }
}


// Changing slides in slider show with text animation automatically
setInterval(function(){plus_divs(1)}, 7000);

var slider_text = document.getElementsByClassName("slider_text");
var slider_p = document.getElementsByClassName("slider_p");
var slider_buttons = document.getElementsByClassName("container_slider_buttons");

function changing_slider_animation(){
    slider_text[0].classList.remove('slider_text--animation');
    slider_p[0].classList.remove('slider_p--animation');
    slider_buttons[0].classList.remove('slider_buttons--animation');

    setTimeout(() => {
        slider_text[0].classList.add ('slider_text--animation');
        slider_p[0].classList.add ('slider_p--animation');
        slider_buttons[0].classList.add ('slider_buttons--animation');
    }, "0010");
}


//Second div effect


const statistics = document.querySelectorAll('.statistics');


function delay(ms){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    })
}

async function passLoop(statistics, qtd, ms){
    console.log(statistics, ms);
    let length = parseInt(statistics.innerHTML);
    for (let i = 0; i < length; i += qtd){
        statistics.innerHTML = i;
        await delay(ms);
    }
    statistics.innerHTML = length;
}

var trigger = false;

window.onscroll = function (){scrollFcuntion()};

function scrollFcuntion(){
    if (document.documentElement.scrollTop > 643 && trigger == false){
        passLoop(statistics[0], 9, 1);
        passLoop(statistics[1], 4, 10);
        passLoop(statistics[2], 12, 1);
        passLoop(statistics[3], 1, 50);
        trigger = true;
    }
}


// Fourth Section

const backgroudMove = document.querySelector('.fourth_section-background');
var body = document.querySelector("body");

document.addEventListener('scroll', () => {
    
    //image height
    var imageHeight = backgroudMove.offsetHeight;
    
    //distance image from top
    var imageFromTop = backgroudMove.offsetTop;
    
    //distance image from bottom
    var imageFromBottom = imageFromTop + backgroudMove.offsetHeight;
    
    
    //position scroll
    var positionScroll = window.scrollY;

    //size screen
    var clientScreenHeight = document.documentElement.clientHeight;

    //body height
    var heightBody = body.offsetHeight + clientScreenHeight - (body.offsetHeight - positionScroll);

    console.log(clientScreenHeight, positionScroll, imageFromBottom, heightBody);
    //imageFromBottom == 100%

    // console.log(imageFromBottom, heightBody)

    
    
    if ((positionScroll + clientScreenHeight) > imageFromTop){
        var percentageFBot = Math.round(imageFromBottom - positionScroll);
        var scrollBox = (heightBody - positionScroll);
        var perc = (scrollBox * percentageFBot);
        
        // console.log(percentageFBot, scrollBox);
        // // console.log((percentage * 100)/ imageFromBottom);
        // percentage = ((percentage * (46.51)) / 100);
        // backgroudMove.style.backgroundPositionY = `${percentage}%`;

        
    } else{
        
    }
   
})

// Carousel Script

var carouselDrag = document.querySelector('.carousel_drag');
var pressed = false;

// console.log(event.currentTarget, event.target);
carouselDrag.addEventListener('mouseenter', () => {
    carouselDrag.addEventListener('mousedown', () => {
        pressed = true;
        console.log("pressed");
    })

    carouselDrag.addEventListener("mouseup", (event) => {
        pressed = false;
        console.log("unpressed");
    }) 
    console.log("mouse is inside");
});

carouselDrag.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();
    console.log("moving");
});


carouselDrag.addEventListener('mouseleave', () => {
    console.log("mouse is outside");
    console.log(pressed);
    if(!pressed) { } else {
        pressed= false;
    } 
    
})


// Nineth Form

body.addEventListener("click", () => {
    
})

var span = document.querySelectorAll('.form_options');
var list = document.querySelectorAll(".list");


span[0].childNodes[1].innerHTML = list[0].children[0].innerHTML;
span[1].childNodes[1].innerHTML = list[1].children[0].innerHTML;

// for (let i = 0; i < 4; i++){
//     if (list[1].children[i].classList.contains("current")){
//         span[1].childNodes[1].innerHTML = list[1].children[i].innerHTML;
//     }
// }

span[0].addEventListener('click', (target) => {
    console.log(target.target);
    list[0].classList.toggle("list--showing");
    span[0].childNodes[1].innerHTML = target.target.innerHTML;
})

span[1].addEventListener('click', (target) => {
    list[1].classList.toggle("list--showing");
    span[1].childNodes[1].innerHTML = target.target.innerHTML;
})








