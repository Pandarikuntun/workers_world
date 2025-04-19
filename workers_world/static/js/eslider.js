const eslider = document.querySelector('.eslider');
const eslides = eslider.querySelectorAll('.eslide');
let eCurrentIndex = 0;

// Hide all slides except the first one
eslides.forEach((eslide, index) => {
    eslide.style.display = index === 0 ? 'block' : 'none';
});

// Function to show the next slide
function showNexteSlide() {
    eslides[eCurrentIndex].style.display = 'none'; // Hide the current slide 
    eCurrentIndex = (eCurrentIndex + 1) % eslides.length; // Move to the next slide
    eslides[eCurrentIndex].style.display = 'block'; // Show the next slide
}

// Automatically change slides every 3 seconds
setInterval(showNexteSlide, 3000);