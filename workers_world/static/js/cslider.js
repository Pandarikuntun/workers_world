const cslider = document.querySelector('.cslider');
const cslides = cslider.querySelectorAll('.cslide');
let cCurrentIndex = 0;

// Hide all slides except the first one
cslides.forEach((cslide, index) => {
    cslide.style.display = index === 0 ? 'block' : 'none';
});

// Function to show the next slide
function showNextcSlide() {
    cslides[cCurrentIndex].style.display = 'none'; // Hide the current slide 
    cCurrentIndex = (cCurrentIndex + 1) % cslides.length; // Move to the next slide
    cslides[cCurrentIndex].style.display = 'block'; // Show the next slide
}

// Automatically change slides every 3 seconds
setInterval(showNextcSlide, 3000);