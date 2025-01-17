let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Cambia de imagen cada 3 segundos
}

function moveSlide(n) {
    showSlides(slideIndex += n);
}

document.addEventListener('DOMContentLoaded', showSlides);