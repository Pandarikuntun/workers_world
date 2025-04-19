const pslider = document.querySelector('.pslider');
const pslides = pslider.querySelectorAll('.pslide');
let pCurrentIndex = 0;

// Hide all slides except the first one
pslides.forEach((pslide, index) => {
    pslide.style.display = index === 0 ? 'block' : 'none';
});

// Function to show the next slide
function showNextPSlide() {
    pslides[pCurrentIndex].style.display = 'none'; // Hide the current slide
    pCurrentIndex = (pCurrentIndex + 1) % pslides.length; // Move to the next slide
    pslides[pCurrentIndex].style.display = 'block'; // Show the next slide
}

// Automatically change slides every 3 seconds
setInterval(showNextPSlide, 3000);