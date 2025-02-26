function verificarDispositivo() {
    const isMobile = window.innerWidth < 768 || /Mobi|Android|iPhone/i.test(navigator.userAgent);
    
    if (isMobile) {
        document.body.style.overflow = "hidden"; 
        document.getElementById("tela-inicial").style.display = "flex"; 

        document.getElementById("imagem").addEventListener("click", function() {
            document.getElementById("tela-inicial").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("tela-inicial").style.display = "none";
                document.body.style.overflow = "auto";
            }, 500);
        });
    } else {
        document.getElementById("tela-inicial").style.display = "none";
    }
}

window.onload = verificarDispositivo;
window.addEventListener("resize", verificarDispositivo);