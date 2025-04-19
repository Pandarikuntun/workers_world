const cuslider = document.querySelector('.cuslider');
const cuslides = cuslider.querySelectorAll('.cuslide');
let cuCurrentIndex = 0;

// Hide all slides except the first one
cuslides.forEach((cuslide, index) => {
    cuslide.style.display = index === 0 ? 'block' : 'none';
});

// Function to show the next slide
function showNextcuSlide() {
    cuslides[cuCurrentIndex].style.display = 'none'; // Hide the current slide 
    cuCurrentIndex = (cuCurrentIndex + 1) % cuslides.length; // Move to the next slide
    cuslides[cuCurrentIndex].style.display = 'block'; // Show the next slide
}

// Automatically change slides every 3 seconds
setInterval(showNextcuSlide, 3000);