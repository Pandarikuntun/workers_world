const paslider = document.querySelector('.paslider');
const paslides = paslider.querySelectorAll('.paslide');
let paCurrentIndex = 0;

// Hide all slides except the first one
paslides.forEach((paslide, index) => {
    paslide.style.display = index === 0 ? 'block' : 'none';
});

// Function to show the next slide
function showNextPaSlide() {
    paslides[paCurrentIndex].style.display = 'none'; // Hide the current slide 
    paCurrentIndex = (paCurrentIndex + 1) % paslides.length; // Move to the next slide
    paslides[paCurrentIndex].style.display = 'block'; // Show the next slide
}

// Automatically change slides every 3 seconds
setInterval(showNextPaSlide, 3000);