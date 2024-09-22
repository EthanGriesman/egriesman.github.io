document.addEventListener('DOMContentLoaded', function() {
    const slideshows = document.querySelectorAll('.slideshow');

    slideshows.forEach(slideshow => {
        let images = slideshow.querySelectorAll('img');
        let currentImageIndex = 0;

        function showNextImage() {
            images[currentImageIndex].style.display = 'none';
            currentImageIndex = (currentImageIndex + 1) % images.length;
            images[currentImageIndex].style.display = 'block';
        }

        setInterval(showNextImage, 3000); // Change image every 3 seconds
    });
});
