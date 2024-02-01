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



// //Here the function timeOut Occur, I need to this way, because It's a Async function!
// function setDelay(element, currentValue, valueMax){
//     setTimeout(function() {
//         element.innerHTML = currentValue;
//         callingNext(element, currentValue, valueMax);
//     }, 10);
// }

// //Here I will check the current value and update it, them I will continue calling the timeOut function or finishing
// function callingNext(element, currentValue, valueMax){
//     if (currentValue < valueMax){
//         currentValue += 7;
//         setDelay(element, currentValue, valueMax);
//     }else{
//         element.innerHTML = valueMax;
//         currentValue = 0;
//     }
// }

// //Here I'll run in each "element" and update their content, for it I will call two functions!
// function startDisplayCount(){
//     statistics.forEach((element) => {
//         var currentValue = 0;
//         var valueMax = parseInt(element.innerHTML);
//         element.innerHTML = 0;
//         callingNext(element, currentValue, valueMax);
//     })
// }

var trigger = false;

window.onscroll = function (){scrollFcuntion()};

// var maxHeightScreen = document.body.scrollHeight;
// const maxPercentage = 100;
// const 

function scrollFcuntion(){
    if (document.documentElement.scrollTop > 643 && trigger == false){
        passLoop(statistics[0], 9, 1);
        passLoop(statistics[1], 4, 10);
        passLoop(statistics[2], 12, 1);
        passLoop(statistics[3], 1, 50);
        trigger = true;
    }
}







