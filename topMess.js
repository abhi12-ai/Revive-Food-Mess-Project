let currentIndex = 0;

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth;
    const offset = currentIndex * itemWidth;
    carousel.style.transform = `translateX(-${offset}px)`;
}

function nextSlide() {
    const items = document.querySelectorAll('.carousel-item');
    if (currentIndex < items.length - 3) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = document.querySelectorAll('.carousel-item').length - 3;
    }
    updateCarousel();
}

window.addEventListener('resize', updateCarousel);
