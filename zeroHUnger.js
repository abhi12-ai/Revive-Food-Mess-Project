let slideIndex = 0;
let slides = document.getElementsByClassName("carousel-slide");
let slideInterval;

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "flex";  
    slides[slideIndex - 1].classList.add("fade");
    slideInterval = setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function plusSlides(n) {
    clearTimeout(slideInterval);
    slideIndex += n;
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    showSpecificSlide(slideIndex);
}

function showSpecificSlide(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n - 1].style.display = "flex";
    slides[n - 1].classList.add("fade");
    slideInterval = setTimeout(showSlides, 3000); // Reset the interval
}

function pauseSlides() {
    clearTimeout(slideInterval);
}

function resumeSlides() {
    slideInterval = setTimeout(showSlides, 3000);
}

document.querySelector(".prev").addEventListener("click", function() {
    plusSlides(-1);
});

document.querySelector(".next").addEventListener("click", function() {
    plusSlides(1);
});

// Add event listeners for pausing and resuming on hover
for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener("mouseover", pauseSlides);
    slides[i].addEventListener("mouseout", resumeSlides);
}

// Initialize the carousel
showSlides();
