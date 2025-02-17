// Definindo as versões em português e japonês
const phrases = {
    "HESITAÇÃO": [
        { pt: "H", jp: "へ" }, 
        { pt: "E", jp: "え" },
        { pt: "S", jp: "す" },
        { pt: "I", jp: "い" },
        { pt: "T", jp: "て" },
        { pt: "A", jp: "あ" },
        { pt: "Ç", jp: "ち" },
        { pt: "Ã", jp: "ん" },
        { pt: "O", jp: "お" }
    ],
    "É A": [
        { pt: "É", jp: "それ" },
        { pt: "A", jp: "あ" }
    ],
    "DERROTA": [
        { pt: "D", jp: "で" },
        { pt: "E", jp: "え" },
        { pt: "R", jp: "り" },
        { pt: "R", jp: "ろ" },
        { pt: "O", jp: "お" },
        { pt: "T", jp: "と" },
        { pt: "A", jp: "あ" }
    ]
};

// Função para alternar entre português e japonês
function randomizeText() {
    function updateText() {
        // Para cada parte da frase
        ['HESITAÇÃO', 'É A', 'DERROTA'].forEach(function (phraseId) {
            let phraseElement = document.getElementById(phraseId.toLowerCase().replace(" ", ""));
            let phrase = phrases[phraseId];

            // Loop para cada letra da frase
            let updatedText = "";
            for (let i = 0; i < phrase.length; i++) {
                let randomChoice = Math.random() < 0.5 ? phrase[i].pt : phrase[i].jp;
                updatedText += `<span class="blink">${randomChoice}</span>`;
            }

            // Atualiza a frase com as alterações
            phraseElement.innerHTML = updatedText;
        });

        // Reaplica a mudança a cada 1000ms
        setTimeout(updateText, 1000);
    }

    updateText(); // Inicia a animação
}

// Iniciar a animação ao carregar a página
window.onload = randomizeText;
