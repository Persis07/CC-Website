document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        let currentIndex = 0;

        const images = carousel.querySelectorAll('img');
        const totalImages = images.length;

        carousel.parentElement.querySelector('.arrow.left').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            updateCarousel();
        });

        carousel.parentElement.querySelector('.arrow.right').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalImages;
            updateCarousel();
        });

        function updateCarousel() {
            const translateValue = -currentIndex * 100 + '%';
            carousel.style.transform = `translateX(${translateValue})`;
        }
    });
});
