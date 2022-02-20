const carouselSlide = document.querySelector('.et-carousel-slide');
const carouselImages = document.querySelectorAll('.et-carousel-slide img');

//butonat
const paraBtn = document.querySelector('#paraBtn');
const tjetraBtn = document.querySelector ('#tjetraBtn');

//counteri
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';

//dirixhimi me butona

tjetraBtn.addEventListener('click', ()=>{
    if (counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';

});

paraBtn.addEventListener('click', ()=>{
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';

});

carouselSlide.addEventListener('transitionend', ()=>{
    console.log(carouselImages[counter]);
    if (carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';
    }

});