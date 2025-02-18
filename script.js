const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating-value');

stars.forEach((star) => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-value');
        ratingValue.textContent = rating; // Update displayed rating
        
        stars.forEach((s) => {
            s.classList.remove('selected'); // Reset all stars
        });
        
        // Highlight selected stars
        for (let i = 0; i < rating; i++) {
            stars[i].classList.add('selected');
        }
    });
});