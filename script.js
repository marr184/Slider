let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const next = document.querySelector('.slide-right')
const prev = document.querySelector('.slide-left')

function showSlide(index) {
    slides.forEach((slide, i)=> {
        slide.classList.remove('active');
        dots[i].classList.remove('active');

    })
    slides[index].classList.add('active');
    dots[index].classList.add('active');

}

function nextSlide() {
    currentIndex++;

    if(currentIndex > slides.length - 1) {
        currentIndex = 0;
    }
    showSlide(currentIndex)
}

function prevSlide() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

        showSlide(currentIndex)

}


next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)

dots.forEach((dot, index)=> {
    dot.addEventListener('click', ()=> {
        currentIndex = index;
        showSlide(currentIndex);
    })
})

setInterval(function() {
    nextSlide();
}, 5000)