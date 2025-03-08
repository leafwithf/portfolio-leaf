    const fontes = [
        "Permanent Marker, cursive",
        "VT323, monospace",
        "Indie Flower, cursive",
        "Kaushan Script, cursive"
    ];

    const nome = document.getElementById("nome-dinamico");

    function mudarFonte() {
        const fonteAleatoria = fontes[Math.floor(Math.random() * fontes.length)];
        nome.style.fontFamily = fonteAleatoria;
    }

    setInterval(mudarFonte, 1000);
