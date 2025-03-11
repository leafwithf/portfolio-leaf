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
    // Ajusta para garantir que o site comece no topo ao recarregar
    if (window.location.hash !== '#inicio') {
        window.location.hash = '#inicio';
    }

    const backToTopButton = document.getElementById('backToTop');
    const whatsappButton = document.getElementById('whatsappButton');

    // Função para exibir ou esconder os botões ao rolar a página
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

    // Adiciona o evento de scroll para exibir ou esconder os botões
    document.addEventListener('scroll', toggleButtons);

    // Ação ao clicar no botão "Voltar ao Topo"
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Ação ao clicar no botão do WhatsApp
    whatsappButton.addEventListener('click', function () {
        window.location.href = 'https://wa.me/5599999999999';
    });
});
