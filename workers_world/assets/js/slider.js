const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slide');
let currentIndex = 0;

// Hide all slides except the first one
slides.forEach((slide, index) => {
    slide.style.display = index === 0 ? 'block' : 'none';
});

// Function to show the next slide
function showNextSlide() {
    slides[currentIndex].style.display = 'none'; // Hide the current slide
    currentIndex = (currentIndex + 1) % slides.length; // Move to the next slide
    slides[currentIndex].style.display = 'block'; // Show the next slide
}

// Automatically change slides every 3 seconds
setInterval(showNextSlide, 3000);