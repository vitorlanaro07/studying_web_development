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

document.addEventListener('scroll', () => {
    var limit = backgroudMove.offsetTop + backgroudMove.offsetHeight;
    var scrollPosition = window.scrollY;

    if (scrollPosition < backgroudMove.offsetTop && scrollPosition <= limit){
        console.log("yes")
        backgroudMove.style.backgroundPositionY = (5 * (10*(scrollPosition/limit))) + '%';   
      }else{
        // backgroudMove.style.backgroundPositionY = '50%';    
      }
    console.log("Scroll Positon: "+ scrollPosition + "Scroll Limit: " + limit + "Imagem position: " +backgroudMove.offsetTop);
})







