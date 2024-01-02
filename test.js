document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        let currentIndex = 0;
        const images = carousel.querySelectorAll('img');
        const totalImages = images.length;
        const imageWidth = 100; // Assuming each image has a width of 100%

        carousel.parentElement.querySelector('.arrow.left').addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        carousel.parentElement.querySelector('.arrow.right').addEventListener('click', () => {
            if (currentIndex < totalImages - 1) {
                currentIndex++;
                updateCarousel();
            }
        });

        function updateCarousel() {
            const translateValue = -currentIndex * imageWidth + '%';
            carousel.style.transform = `translateX(${translateValue})`;
        }
    });
});
