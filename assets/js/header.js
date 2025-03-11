document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('checkbox'); // Corrigido o ID
    const menuAberto = document.querySelector('.menu-aberto');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const body = document.body;
    const header = document.querySelector('header'); 
    const menu = document.querySelector('.nav-menu'); 
    const inicio = document.getElementById('inicio');

    function toggleMenuOnScroll() {
        if (!inicio) return; // Evita erro se o elemento não existir
        const scrollPosition = window.scrollY;

        if (scrollPosition > inicio.clientHeight - 50) { 
            header.classList.add('visible');
            menu.classList.add('visible');
        } else {
            header.classList.remove('visible');
            menu.classList.remove('visible');
        }
    }

    document.addEventListener('scroll', toggleMenuOnScroll);

    if (menuToggle) {
        menuToggle.addEventListener('change', function () {
            if (menuToggle.checked) {
                menuAberto.classList.add('active');
                body.classList.add('no-scroll');
            } else {
                menuAberto.classList.remove('active');
                body.classList.remove('no-scroll');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (menuToggle) menuToggle.checked = false;
            menuAberto.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });
});
