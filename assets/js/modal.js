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


// Close Modal 
document.addEventListener("DOMContentLoaded", function () {
    const languageSwitch = document.getElementById("language-switch");
    const buttonText = document.getElementById("button-text");
    const arrowIcons = document.querySelectorAll(".arrow-icon"); 
    let isPortuguese = true; 

    const translations = {
        "pt": {
            "visualize": "Mostrar Tudo",
            "less": "Mostrar Menos"
        },
        "en": {
            "visualize": "Show All",
            "less": "Show Less"
        }
    };

    languageSwitch.addEventListener("click", function () {
        isPortuguese = !isPortuguese;
        updateTranslations(); 

        const languageIcon = document.getElementById("language-icon");
        languageIcon.src = isPortuguese ? "assets/img/svg/BrasilPB.svg" : "assets/img/svg/USAPB.svg";
    });

    function updateTranslations() {
        buttonText.textContent = isPortuguese ? translations.pt.visualize : translations.en.visualize;
    }

    document.getElementById("toggle-certificates").addEventListener("click", function () {
        let section = document.getElementById("certificates");
        section.classList.toggle("active");

        if (section.classList.contains("active")) {
            buttonText.textContent = isPortuguese ? translations.pt.less : translations.en.less;
            arrowIcons.forEach(arrow => arrow.src = "assets/img/svg/arrowUp.svg");
        } else {
            buttonText.textContent = isPortuguese ? translations.pt.visualize : translations.en.visualize;
            arrowIcons.forEach(arrow => arrow.src = "assets/img/svg/arrowDown.svg");
        }
    });

    updateTranslations();
});

// Modal Portfolio

window.projectsPortfolio = {
    "portfolio": {
        title: { pt: "Portfólio", en: "Portfolio" },
        description: {
            pt: "Portfólio próprio para exposição de trabalhos, skills, redes sociais e contato.",
            en: "Personal portfolio for showcasing work, skills, social networks, and contact."
        },
        category: { pt: "Portfólio", en: "Portfolio" },
        image: "assets/img/sitesfts/PT/index-pt.png",
        link: "https://portfolioraffa.netlify.app/#inicio",
        repoLink: "https://github.com/leafwithf/portfolio-raffa",
        technologies: [
            `<img src="assets/img/svg/html5.svg" alt="HTML5" width="40" height="40">`,
            `<img src="assets/img/svg/css3.svg" alt="CSS3" width="40" height="40">`,
            `<img src="assets/img/svg/javascript.svg" alt="JavaScript" width="40" height="40">`
        ]
    },
    "projeto-fotos": {
        title: { pt: "Projeto Fotos", en: "Photo Project" },
        description: {
            pt: "Projeto voltado para fotografia, possivelmente destacando imagens artísticas, portfólio fotográfico ou conceitos visuais.",
            en: "A project focused on photography, possibly highlighting artistic images, photographic portfolio, or visual concepts."
        },
        category: { pt: "Fotografia", en: "Photography" },
        image: "assets/img/sitesfts/prFT/art-ft.png",
        link: "https://leafwithf.netlify.app",
        repoLink: "https://github.com/leafwithf/projeto-fts",
        technologies: [
            `<img src="assets/img/svg/html5.svg" alt="HTML5" width="40" height="40">`,
            `<img src="assets/img/svg/css3.svg" alt="CSS3" width="40" height="40">`,
            `<img src="assets/img/svg/javascript.svg" alt="JavaScript" width="40" height="40">`
        ]
    },
    "mia": {
        title: { pt: "M.I.A.", en: "M.I.A." },
        description: {
            pt: "Empresa de monitoramento inteligente de segurança.",
            en: "Intelligent security monitoring company."
        },
        category: { pt: "Empresa de segurança", en: "Security company" },
        image: "assets/img/sitesfts/MIA/cliente-mia.png",
        link: "https://tccmia.netlify.app",
        repoLink: "https://github.com/leafwithf/mia",
        technologies: [
            `<img src="assets/img/svg/html5.svg" alt="HTML5" width="40" height="40">`,
            `<img src="assets/img/svg/css3.svg" alt="CSS3" width="40" height="40">`,
            `<img src="assets/img/svg/react.svg" alt="React" width="40" height="40">`
        ]
    },

    "speedtest": {
        title: { pt: "SpeedTest", en: "SpeedTest" },
        description: {
            pt: "Ferramenta online para testar a velocidade de sua internet de forma rápida e simples.",
            en: "An online tool to quickly and easily test your internet."
        },
        category: { pt: "Teste de Internet", en: "Internet Tester" },
        image: "assets/img/sitesfts/ST/SpeedTest.png",
        link: "https://leafwithf-speedtest-app-mnhg9l.streamlit.app",
        repoLink: "https://github.com/leafwithf/SpeedTest",
        technologies: [
            `<img src="assets/img/svg/html5.svg" alt="HTML5" width="40" height="40">`,
            `<img src="assets/img/svg/css3.svg" alt="CSS3" width="40" height="40">`,
            `<img src="assets/img/svg/streamlit.png" alt="StreamLit" width="40" height="40">`,
            `<img src="assets/img/svg/python.svg" alt="Python" width="40" height="40">`
        ]
    }
};

let currentLanguage = "pt"; 

function openModalPortfolio(projectId) {
    const project = window.projectsPortfolio[projectId];
    if (project) {
        document.getElementById("modal-img").src = project.image;
        document.getElementById("modal-title").innerText = project.title[currentLanguage];
        document.getElementById("modal-description").innerText = project.description[currentLanguage];
        document.getElementById("modal-category").innerText = project.category[currentLanguage];
        document.getElementById("details-btn").href = project.link;
        document.getElementById("repo-btn").href = project.repoLink;

        const technologiesContainer = document.getElementById("modal-technologies");
        technologiesContainer.innerHTML = "";
        project.technologies.forEach(tech => {
            const techElement = document.createElement("div");
            techElement.innerHTML = tech;
            technologiesContainer.appendChild(techElement);
        });

        document.getElementById("modal-portfolio").style.display = "flex";
    }
}

function closeModalPortfolio() {
    document.getElementById("modal-portfolio").style.display = "none";
}

document.getElementById("language-switch").addEventListener("click", () => {
    currentLanguage = currentLanguage === "pt" ? "en" : "pt";
});

function openModalPortfolio(projectId) {
    const project = window.projectsPortfolio[projectId];
    if (project) {
        document.getElementById("modal-img").src = project.image;
        document.getElementById("modal-title").innerText = project.title[currentLanguage] || "";
        document.getElementById("modal-description").innerText = project.description[currentLanguage] || "";
        document.getElementById("modal-category").innerText = project.category[currentLanguage] || "";
        document.getElementById("details-btn").href = project.link;
        document.getElementById("repo-btn").href = project.repoLink;

        const technologiesContainer = document.getElementById("modal-technologies");
        technologiesContainer.innerHTML = "";
        project.technologies.forEach(tech => {
            const techElement = document.createElement("div");
            techElement.innerHTML = tech;
            technologiesContainer.appendChild(techElement);
        });

        document.getElementById("modal-portfolio").style.display = "flex";
    }
}

function closeModalPortfolio() {
    document.getElementById("modal-portfolio").style.display = "none";
}
