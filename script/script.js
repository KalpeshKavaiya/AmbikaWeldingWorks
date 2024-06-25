document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxSlider = document.querySelector(".lightbox-slider");
    const closeButton = document.querySelector(".close-btn");
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");
    let currentSlideIndex = 0;

    function openLightbox() {
        lightbox.style.display = "flex";
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        lightbox.style.display = "none";
        document.body.style.overflow = "";
    }

    function showSlide(index) {
        const transformValue = -index * 100;
        lightboxSlider.style.transform = `translateX(${transformValue}%)`;
        updateControls(index);
    }

    function updateControls(index) {
        prevButton.style.display = index === 0 ? "none" : "block";
        nextButton.style.display = index === lightboxSlider.children.length - 1 ? "none" : "block";
    }

    function showPreviousSlide() {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            showSlide(currentSlideIndex);
        }
    }

    function showNextSlide() {
        if (currentSlideIndex < lightboxSlider.children.length - 1) {
            currentSlideIndex++;
            showSlide(currentSlideIndex);
        }
    }

    closeButton.addEventListener("click", closeLightbox);
    prevButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);

    const projectGalleryLinks = document.querySelectorAll('.project-gallery a[data-lightbox="projects"]');
    projectGalleryLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            currentSlideIndex = 0;
            lightboxSlider.innerHTML = "";
            const galleryItems = link.parentNode.querySelectorAll('a[data-lightbox="projects"] img, a[data-lightbox="projects"]:not(img)');
            galleryItems.forEach(item => {
                const img = document.createElement("img");
                img.src = item.src || item.href;
                lightboxSlider.appendChild(img);
            });
            openLightbox();
            showSlide(currentSlideIndex);
        });
    });
});





document.addEventListener('DOMContentLoaded', function() {
    const sliderButtons = document.querySelectorAll('.slider-btn');
    const slides = document.querySelectorAll('.image-slider img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    let autoplay = true;

    function changeSlide(index) {
        // Remove active class from all buttons and slides
        sliderButtons.forEach(btn => btn.classList.remove('active'));
        slides.forEach(slide => slide.classList.remove('active'));

        // Add active class to the selected button and corresponding slide
        sliderButtons[index].classList.add('active');
        slides[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        changeSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        changeSlide(currentSlide);
    }

    function toggleAutoplay() {
        autoplay = !autoplay;
        if (autoplay) {
            slideInterval = setInterval(nextSlide, 5000);
            pauseBtn.innerText = 'Pause';
        } else {
            clearInterval(slideInterval);
            pauseBtn.innerText = 'Play';
        }
    }

    sliderButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            changeSlide(index);
            clearInterval(slideInterval); // Stop auto-slide on manual change
            slideInterval = setInterval(nextSlide, 5000); // Restart auto-slide
        });

        button.addEventListener('mouseover', function() {
            changeSlide(index);
            clearInterval(slideInterval); // Stop auto-slide on manual change
            slideInterval = setInterval(nextSlide, 5000); // Restart auto-slide
        });

        button.addEventListener('touchstart', function() {
            changeSlide(index);
            clearInterval(slideInterval); // Stop auto-slide on manual change
            slideInterval = setInterval(nextSlide, 5000); // Restart auto-slide
        });
    });

    prevBtn.addEventListener('click', function() {
        prevSlide();
        clearInterval(slideInterval); // Stop auto-slide on manual change
        slideInterval = setInterval(nextSlide, 5000); // Restart auto-slide
    });

    nextBtn.addEventListener('click', function() {
        nextSlide();
        clearInterval(slideInterval); // Stop auto-slide on manual change
        slideInterval = setInterval(nextSlide, 5000); // Restart auto-slide
    });

    pauseBtn.addEventListener('click', function() {
        toggleAutoplay();
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            prevSlide();
        } else if (event.key === 'ArrowRight') {
            nextSlide();
        }
        clearInterval(slideInterval); // Stop auto-slide on manual change
        slideInterval = setInterval(nextSlide, 5000); // Restart auto-slide
    });
});
