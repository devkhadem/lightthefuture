document.addEventListener('DOMContentLoaded', function () {
    const dots = document.querySelectorAll('.dots-menu span');
    const gallery = document.querySelector('.image-gallery');
    const galleryImages = document.querySelectorAll('.gallery-img');
    const slideHeight = gallery.clientHeight;

    // Function to update active dot
    function updateActiveDot() {
        let currentIndex = Math.round(gallery.scrollTop / slideHeight);
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Scroll to image on dot click
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = this.getAttribute('data-slide');
            galleryImages[slideIndex].scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Update dot on scroll
    gallery.addEventListener('scroll', updateActiveDot);

    // Initial dot update
    updateActiveDot();

    // Catalog button hover effect
    const catalogBtn = document.querySelector('.btn-catalog');
    const arrowBtn = document.querySelector('.btn-arrow');

    catalogBtn.addEventListener('mouseenter', () => {
        arrowBtn.style.transform = 'translateX(5px)';
    });

    catalogBtn.addEventListener('mouseleave', () => {
        arrowBtn.style.transform = 'translateX(0)';
    });

    const searchIcon = document.querySelector('.fa-search').parentElement;
    const searchBar = document.querySelector('.search-bar');

    searchIcon.addEventListener('click', (e) => {
        e.preventDefault();
        searchBar.classList.toggle('active');
        if (searchBar.classList.contains('active')) {
            searchBar.focus();
        }
    });
});
