document.addEventListener('DOMContentLoaded', function () {
    // Elementos do menu e header
    const menuToggle = document.getElementById('menuToggle');
    const menuAberto = document.querySelector('.menu-aberto');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const body = document.body;
    const header = document.querySelector('header'); // Pegue o header
    const menu = document.querySelector('.nav-menu'); // Pegue o menu

    // Função para exibir/esconder o menu ao rolar a página
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

    // Detecta scroll e aplica mudanças
    document.addEventListener('scroll', toggleMenuOnScroll);

    // Abre/fecha o menu ao mudar o estado do checkbox
    menuToggle.addEventListener('change', function () {
        if (menuToggle.checked) {
            menuAberto.classList.add('active');
            body.classList.add('no-scroll');
        } else {
            menuAberto.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });

    // Fecha o menu ao clicar em um link de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            menuToggle.checked = false;
            menuAberto.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });
});
