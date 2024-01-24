var button_pages = document.getElementsByClassName('dropdown');


function show_list(element){
        element.children[1].classList.toggle("showing");
}

function remove_list(element){
    element.children[1].classList.toggle("showing");
}

var slideIndex = 1;

function plus_divs(n){
    show_slider(slideIndex += n)
}

function show_slider(n){
    var i;
    var x = document.getElementsByClassName("slider");

    console.log(n, x.length);

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

    setTimeout(show_slider, 3000);
}

show_slider(slideIndex);