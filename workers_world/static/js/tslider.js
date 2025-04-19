const tslider = document.querySelector('.tslider');
const tslides = tslider.querySelectorAll('.tslide');
let tCurrentIndex = 0;

// Hide all slides except the first one
tslides.forEach((tslide, index) => {
    tslide.style.display = index === 0 ? 'block' : 'none';
});

// Function to show the next slide
function showNexttSlide() {
    tslides[tCurrentIndex].style.display = 'none'; // Hide the current slide 
    tCurrentIndex = (tCurrentIndex + 1) % tslides.length; // Move to the next slide
    tslides[tCurrentIndex].style.display = 'block'; // Show the next slide
}

// Automatically change slides every 3 seconds
setInterval(showNexttSlide, 3000);