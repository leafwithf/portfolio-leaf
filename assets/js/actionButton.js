document.addEventListener('DOMContentLoaded', function () {
    // Ajusta para garantir que o site comece no topo ao recarregar
    if (window.location.hash !== '#inicio') {
        window.location.hash = '#inicio';
    }

    const backToTopButton = document.getElementById('backToTop');
    const downloadButton = document.getElementById('downloadButton');

    function toggleButtons() {
        const scrollPosition = window.scrollY;
        
        // Ajuste aqui o valor do scroll necessário para exibir os botões
        if (scrollPosition > 0) { 
            backToTopButton.style.display = 'flex';
            downloadButton.style.display = 'flex';
            setTimeout(() => {
                backToTopButton.style.opacity = '1';
                downloadButton.style.opacity = '1';
            }, 10);
        } else {
            backToTopButton.style.opacity = '0';
            downloadButton.style.opacity = '0';
            setTimeout(() => {
                backToTopButton.style.display = 'none';
                downloadButton.style.display = 'none';
            }, 500);
        }
    }
    

    // Adiciona o evento de scroll para exibir ou esconder os botões
    document.addEventListener('scroll', toggleButtons);

    // Ação ao clicar no botão "Voltar ao Topo"
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    downloadButton.addEventListener('click', function () {
        const link = document.createElement('a');
        link.href = '../../assets/documents/Currículo-Rafa.pdf';
        link.download = 'Currículo-Rafa.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
        

   document.getElementById("cta-sobre").addEventListener ("click", function(){
        document.getElementById("sobre").scrollIntoView({
            behavior: "smooth"
        });
   });

     
});
