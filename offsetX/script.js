
const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");

console.log(wrapper.attributes);




moving = (e) => {
    if(e.target === wrapper){return};
    wrapper.style.left =`${e.offsetX}px`;
    console.log(e.offsetX);
}

container.addEventListener("mousemove", moving);