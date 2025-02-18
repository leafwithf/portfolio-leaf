function verificarDispositivo() {
    const isMobile = window.innerWidth < 768 || /Mobi|Android|iPhone/i.test(navigator.userAgent);
    
    if (isMobile) {
        document.body.style.overflow = "hidden"; // Bloqueia o scroll antes do clique
        document.getElementById("tela-inicial").style.display = "flex"; // Garante que a tela inicial aparece

        document.getElementById("imagem").addEventListener("click", function() {
            document.getElementById("tela-inicial").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("tela-inicial").style.display = "none";
                document.body.style.overflow = "auto"; // Habilita o scroll após o clique
            }, 500);
        });
    } else {
        document.getElementById("tela-inicial").style.display = "none";
    }
}

// Aguarda o carregamento completo da página antes de rodar o script
window.onload = verificarDispositivo;
window.addEventListener("resize", verificarDispositivo);