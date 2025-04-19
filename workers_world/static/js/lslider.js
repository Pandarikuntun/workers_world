const lslider = document.querySelector('.lslider');
const lslides = lslider.querySelectorAll('.lslide');
let lCurrentIndex = 0;

// Hide all slides except the first one
lslides.forEach((lslide, index) => {
    lslide.style.display = index === 0 ? 'block' : 'none';
});

// Function to show the next slide
function showNextlSlide() {
    lslides[lCurrentIndex].style.display = 'none'; // Hide the current slide 
    lCurrentIndex = (lCurrentIndex + 1) % lslides.length; // Move to the next slide
    lslides[lCurrentIndex].style.display = 'block'; // Show the next slide
}

// Automatically change slides every 3 seconds
setInterval(showNextlSlide, 3000);