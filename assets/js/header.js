document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const menuAberto = document.querySelector('.menu-aberto');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const body = document.body;
    const header = document.querySelector('header'); 
    const menu = document.querySelector('.nav-menu'); 

    function toggleMenuOnScroll() {
        const scrollPosition = window.scrollY;
        const inicio = document.getElementById('inicio');

        if (scrollPosition > inicio.clientHeight - 50) { 
            header.classList.add('visible');
            menu.classList.add('visible');
        } else {
            header.classList.remove('visible');
            menu.classList.remove('visible');
        }
    }

    document.addEventListener('scroll', toggleMenuOnScroll);

    menuToggle.addEventListener('change', function () {
        if (menuToggle.checked) {
            menuAberto.classList.add('active');
            body.classList.add('no-scroll');
        } else {
            menuAberto.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            menuToggle.checked = false;
            menuAberto.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });
});
