document.addEventListener("DOMContentLoaded", function () {
    const languageSwitch = document.getElementById("language-switch");
    const languageIcon = document.getElementById("language-icon");

    const flagPT = "assets/img/svg/Brasil.svg"; // Brazilian flag for Portuguese
    const flagEN = "assets/img/svg/English.svg"; // English flag for English

    const translations = {
        "pt": {
            "home": "Início",
            "portfolio": "Portfólio",
            "aboutnav": "Sobre mim",
            "about": "Olá, me chamo  Rafael",
            "speaktome": "Fale comigo",
            "scroll": "Role para baixo",
            "descriptionAbout": "Movido pela curiosidade, busco transformar ideias em experiências visuais cativantes. Este espaço reflete minha paixão pela inovação.",
            "download": "Baixar o Curriculo",
            "certificates": "Certificados",
            "descriptionCertificates": "Certificados de cursos e eventos em que participei.",
            "mySkills": "Minhas habilidades",
            "descriptionMySkills": "Conheça as habilidades que possuo e as ferramentas que utilizo.",
            "portuguese": "Português",
            "english": "Inglês",
            "deustch": "Alemão",
            "free": "HESITAÇÃO",
            "your": "É A",
            "mind": "DERROTA",
            "projects": "Projetos",
            "descriptionPortfolio": "Confira alguns dos projetos que desenvolvi.",
            "site": "Ir ao Site",
            "code": "Ver Código",
            "contact": "Contato",
            "credits": "2024 Todos os direitos reservados. Desenvolvido por Raffa."
        },

        "en": {

            "home": "Home",
            "portfolio": "Portfolio",
            "aboutnav": "About Me",
            "about": "Hi, I'm Rafael",
            "speaktome": "Talk to Me",
            "scroll": "Scroll Down",
            "descriptionAbout": "Driven by curiosity, I strive to transform ideas into captivating visual experiences. This space reflects my passion for innovation.",
            "download": "Download CV",
            "certificates": "Certificates",
            "descriptionCertificates": "Certificates from courses and events I have participated in.",
            "mySkills": "My Skills",
            "descriptionMySkills": "Discover the skills I possess and the tools I use.",
            "portuguese": "Portuguese",
            "english": "English",
            "deustch": "German",
            "free": "HESITATION",
            "your": "IS THE",
            "mind": "DEFEAT",
            "projects": "Projects",
            "descriptionPortfolio": "Check out some of the projects I have developed.",
            "site": "Go to Site",
            "code": "View Code",
            "contact": "Contact",
            "credits": "2024 All rights reserved. Developed by Raffa."

        }
    };

    let currentLang = localStorage.getItem("language") || "pt";
    setLanguage(currentLang);

    languageSwitch.addEventListener("click", () => {
        currentLang = currentLang === "pt" ? "en" : "pt";
        setLanguage(currentLang);
        localStorage.setItem("language", currentLang);
    });

    function setLanguage(lang) {
        languageIcon.src = lang === "pt" ? flagPT : flagEN;
    
        const translationKeys = Object.keys(translations[lang] || {});
        document.querySelectorAll("[data-translate]").forEach(element => {
            const key = element.getAttribute("data-translate");
            if (translationKeys.includes(key)) {
                element.textContent = translations[lang][key];
            } else {
                console.warn(`Translation key "${key}" not found for language "${lang}"`);
            }
        });
    }
});

