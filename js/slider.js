let dots = document.getElementsByClassName('slider-dot-item');
let index = 0;


let slides = document.getElementsByClassName("home__slide");
function next() {
    slides[index].classList.remove('active');
    index = [index + 1] % slides.length;
    slides[index].classList.add('active');
    
}

function prev() {
    slides[index].classList.remove('active');
    index = [index - 1 + slides.length] % slides.length;
    slides[index].classList.add('active');
    
}

// let slide = document.getElementsByClassName("home__trending--product");
// function next1() {
//     // slide[index].classList.remove('active');
//     index = [index + 5] % slide.length;
//     slide[index].classList.add('active');
// }

// function prev1() {
//     // slide[index].classList.remove('active');
//     index = [index - 5 + slide.length] % slide.length;
//     slide[index].classList.add('active');
// }


