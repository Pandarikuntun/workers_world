const dslider = document.querySelector('.dslider');
const dslides = dslider.querySelectorAll('.dslide');
let dCurrentIndex = 0;

// Hide all slides except the first one
dslides.forEach((dslide, index) => {
    dslide.style.display = index === 0 ? 'block' : 'none';
});

// Function to show the next slide
function showNextdSlide() {
    dslides[dCurrentIndex].style.display = 'none'; // Hide the current slide 
    dCurrentIndex = (dCurrentIndex + 1) % dslides.length; // Move to the next slide
    dslides[dCurrentIndex].style.display = 'block'; // Show the next slide
}

// Automatically change slides every 3 seconds
setInterval(showNextdSlide, 3000);