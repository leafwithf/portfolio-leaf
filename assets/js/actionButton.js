document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('backToTop');

    function toggleButton() {
        if (window.scrollY > 70) {
            if (!backToTopButton.classList.contains('visible')) {
                backToTopButton.style.display = 'flex';
                setTimeout(() => {
                    backToTopButton.style.opacity = '1';
                    backToTopButton.classList.add('visible');
                }, 10);
            }
        } else {
            if (backToTopButton.classList.contains('visible')) {
                backToTopButton.style.opacity = '0';
                backToTopButton.classList.remove('visible');
                setTimeout(() => {
                    if (window.scrollY <= 70) {
                        backToTopButton.style.display = 'none';
                    }
                }, 300);
            }
        }
    }

    document.addEventListener('scroll', toggleButton);

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // CTA "FALE COMIGO"
    document.getElementById("cta-contact").addEventListener("click", function () {
        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });
    });
    

});

