const translations = {
    "pt": {
        "culturadigital": "Bradesco - Cultura Digital",
        "letramentodigital": "Bradesco - Letramento Digital",
        "fundamentosti": "Bradesco - Fundamentos de TI",
        "sharepoint": "Bradesco - Sharepoint",
        "designgrafico": "Area Z - Design Gráfico",
        "aftereffects": "Area Z - After Effects",
        "uspvemsaber": "USP - Vem Saber",
        "uspnegociacao": "USP - Negociação Internacional"
    },
    "en": {
        "culturadigital": "Bradesco - Digital Culture",
        "letramentodigital": "Bradesco - Digital Literacy",
        "fundamentosti": "Bradesco - IT Fundamentals",
        "sharepoint": "Bradesco - Sharepoint",
        "designgrafico": "Area Z - Graphic Design",
        "aftereffects": "Area Z - After Effects",
        "uspvemsaber": "USP - Vem Saber",
        "uspnegociacao": "USP - International Negotiation"
}
};


function openModal(certificate) {
    var modal = document.getElementById('modal-certificate');
    var modalImage = document.getElementById('modalCertificateImage');
    var caption = document.getElementById('captionCertificate');

    var images = {
        'culturadigital': 'assets/img/certificates/CULTURA_DIGITAL.png',
        'letramentodigital': 'assets/img/certificates/Letramento_Digital.png',
        'fundamentosti': 'assets/img/certificates/Fundamentos_TI.png',
        'sharepoint': 'assets/img/certificates/Sharepoint.png',
        'designgrafico': 'assets/img/certificates/Design_Grafico.png',
        'aftereffects': 'assets/img/certificates/After_Effects.png',
        'uspvemsaber': 'assets/img/certificates/USP_VemSaber.png',
        'uspnegociacao': 'assets/img/certificates/Negociacao.png'
    };

    let currentLang = localStorage.getItem("language") || "pt";

    if (images[certificate]) {
        modalImage.src = images[certificate];

        const translation = translations[currentLang][certificate];
        caption.innerHTML = translation;

        modal.style.display = 'flex';
    }
}

function closeModalCertificate() {
    document.getElementById("modal-certificate").style.display = "none";
}
function setLanguage(lang) {
    languageIcon.src = lang === "pt" ? flagPT : flagEN;

    const translationKeys = Object.keys(translations[lang] || {});
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        if (translationKeys.includes(key)) {
            element.textContent = translations[lang][key];
        } else {
            console.warn(`Translation key "${key}" not found for language "${lang}"`);
            element.textContent = element.textContent; 
        }
    });
}

