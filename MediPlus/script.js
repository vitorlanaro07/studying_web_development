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

const carouselContainer = document.querySelector('.fifth_section-carousel');
const innerCarousel = document.querySelector('.carousel_drag');
const slides = document.querySelectorAll(".carousel_image");
let pressed = false, startX, startScrollLeft;

innerCarousel.addEventListener("mousemove", (e) => {
    if(!pressed){
        return
    }else{
        e.preventDefault();
        innerCarousel.scrollLeft = startScrollLeft + (startX - e.pageX);
        console.log(innerCarousel.scrollLeft);
    }
    
});

innerCarousel.addEventListener("scroll", (e) => {
    
    if (innerCarousel.scrollLeft === 0){
        innerCarousel.scrollLeft = (4 * 350) + (4 * 15);
    } else if (Math.round(innerCarousel.scrollLeft) === innerCarousel.scrollWidth - innerCarousel.offsetWidth){
        innerCarousel.scrollLeft = (3 * 350) + (3 * 15);
    }
});


innerCarousel.addEventListener('mouseenter', () => {

    innerCarousel.style.cursor= "grab !important";

    innerCarousel.addEventListener('mousedown', (event) => {   
        pressed = true;
        startX = event.pageX
        startScrollLeft = innerCarousel.scrollLeft;
        innerCarousel.style.cursor= "grabbing !important";
    })

    innerCarousel.addEventListener("mouseup", (event) => {
        pressed = false;
        innerCarousel.style.cursor= "grab !important";
    }) 

});

innerCarousel.addEventListener('mouseleave', () => {
    if(!pressed) { } else {
        pressed= false;
    } 
    
})

//eight carousel


const wrapper = document.querySelector('.eight_section-carousel');
let isPressed = false, startXEight, startScrollLeftEight;

wrapper.addEventListener("mousemove", (e) => {
    if(!isPressed){
        return
    }else{
        e.preventDefault();
        wrapper.scrollLeft = startScrollLeftEight + (startXEight - e.pageX);
        console.log(wrapper.scrollLeft);
    }
    
});

wrapper.addEventListener("scroll", (e) => {
    console.log(wrapper.scrollLeft, wrapper.scrollWidth);
    if (wrapper.scrollLeft === 0){
        wrapper.scrollLeft = (6 * 140) + (5 * 30);
    } else if (Math.round(wrapper.scrollLeft) === wrapper.scrollWidth - wrapper.offsetWidth){
        wrapper.scrollLeft = (4 * 140) + (4 * 30);
    }
});


wrapper.addEventListener('mouseenter', () => {

    wrapper.style.cursor= "grab !important";

    wrapper.addEventListener('mousedown', (event) => {   
        isPressed = true;
        startXEight = event.pageX
        startScrollLeftEight = wrapper.scrollLeft;
        wrapper.style.cursor= "grabbing !important";
    })

    wrapper.addEventListener("mouseup", (event) => {
        isPressed = false;
        wrapper.style.cursor= "grab !important";
    }) 

});

wrapper.addEventListener('mouseleave', () => {
    if(!isPressed) { } else {
        isPressed= false;
    } 
    
})


// Nineth Form

var span = document.querySelectorAll('.form_options');
var list = document.querySelectorAll(".list");

var spanDoctor = span[0].childNodes[1];
var spanDepartment = span[1].childNodes[1];

var dropBoxDoctor = list[0];
var dropBoxDepartment = list[1];


//setting up span to not be void
spanDoctor.innerHTML = dropBoxDoctor.children[0].innerHTML;
spanDepartment.innerHTML = dropBoxDepartment.children[0].innerHTML;


function verifyingClick(dropBoxLenght, click, dropBox, span){
    //maybe this isn't the best way, but works!
    //verifying if the click is in the options of dropbox or not
    for(let i=0; i < dropBoxLenght; i++){
        //first verify if the dropbox is open and if the click is in one of these option
        if(dropBox.classList.contains("list--showing") && click.target == dropBox.children[i]){
            span.innerHTML = click.target.innerHTML;
        }
    }
    //anyway it will close the box!
    dropBox.classList.remove("list--showing");
}


document.addEventListener("click", (click)=> {
    //verifying if the target is span 
    if(click.target == spanDoctor){
        //setting the class to show
        dropBoxDoctor.classList.add("list--showing");   
    }else{
        //if the next click is inside the box select the target or else close the box
        let dropBoxLenght = dropBoxDoctor.children.length;
        verifyingClick(dropBoxLenght, click, dropBoxDoctor, spanDoctor)
    }

    //verifying if the target is span 
    if(click.target == spanDepartment){
        //setting the class to show
        dropBoxDepartment.classList.add("list--showing");
    }else{
        //if the next click is inside the box select the target or else close the box
        let dropBoxLenght = dropBoxDepartment.children.length;
        verifyingClick(dropBoxLenght, click, dropBoxDepartment, spanDepartment);
    }
    
})






