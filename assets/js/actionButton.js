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

document.addEventListener('DOMContentLoaded', function () {
    if (window.location.hash !== '#inicio') {
        window.location.hash = '#inicio';
    }

    const backToTopButton = document.getElementById('backToTop');
    const whatsappButton = document.getElementById('whatsappButton');

    function toggleButtons() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            backToTopButton.style.display = 'flex';
            whatsappButton.style.display = 'flex';
            setTimeout(() => {
                backToTopButton.style.opacity = '1';
                whatsappButton.style.opacity = '1';
            }, 10);
        } else {
            backToTopButton.style.opacity = '0';
            whatsappButton.style.opacity = '0';
            setTimeout(() => {
                backToTopButton.style.display = 'none';
                whatsappButton.style.display = 'none';
            }, 500);
        }
    }

    document.addEventListener('scroll', toggleButtons);

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    whatsappButton.addEventListener('click', function () {
        const mensagem = encodeURIComponent("Olá! Gostaria de saber mais sobre seus serviços.");
        window.location.href = `https://wa.me/5517992632342?text=${mensagem}`;
    });

});
