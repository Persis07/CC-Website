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


 <header>
        <img src="./assets/DS_Hauptbild_2200x1238.jpg" alt="ds image">
        <h1>Food</h1>
        <p>Project Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </header>

    <div class="cards-container">
        <div class="card left">
            <img src="./Asset_services animation Projekt_AME/DS_Casesbild_1_822x596.jpg" alt="Image 1">
            </div>
        <div class="card right">
            <h2>Food Packaging</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi aperiam blanditiis
                distinctio incidunt minima provident eius, maiores unde! Exercitationem
                recusandae aperiam soluta, unde sequi doloremque nihil praesentium perferendis ratione aut.
            Oorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia laboriosam vero in exercitationem
            molestiae, ipsa, quo nesciunt dicta nisi dolorum neque incidunt. Nam mollitia nisi animi itaque doloribus reprehenderit sed.</p>
        </div>
        

</div>

