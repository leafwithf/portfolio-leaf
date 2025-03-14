document.addEventListener("DOMContentLoaded", function () {
    const languageSwitch = document.getElementById("language-switch");
    const languageIcon = document.getElementById("language-icon");

    const flagEN = "assets/img/svg/USA.svg";
    const flagPT = "assets/img/svg/Brasil.svg";

    const translations = {
        "pt": {
            "home": "Início",
            "portfolio": "Portfólio",
            "aboutnav": "Sobre mim",
            "about": "Olá, me chamo",
            "speaktome": "fale comigo",
            "scroll": "Role para baixo",
            "descriptionAbout": "Movido pela curiosidade, busco transformar ideias em experiências visuais cativantes. Este espaço reflete minha paixão pela inovação.",
            "download": "Baixar o Curriculo",
            "mySkills": "Minhas habilidades",
            "descriptionMySkills": "Conheça as habilidades que possuo e as ferramentas que utilizo.",
            "portuguese": "Português",
            "english": "Inglês",
            "deustch": "Alemão",
            "service": "Serviços",
            "descriptionServices": "Conheça os serviços que ofereço e entre em contato para saber mais.",
            "services1": "Desenvolvimento Web",
            "services2": "Design Gráfico",
            "services3": "Animações interativas para web",
            "services4": "Animações e motion graphics",
            "services5": "Edição de imagens/vídeos",
            "services6": "Desenvolvimento de landing pages",
            "free": "HESITAÇÃO",
            "your": "É A",
            "mind": "DERROTA",
            "projects": "Projetos",
            "descriptionPortfolio": "Confira alguns dos projetos que desenvolvi.",
            "site": "Ir ao Site",
            "code": "Ver Código",
            "contact": "Contato",
            "credits": "2024 Todos os direitos reservados. Desenvolvido por Raffa.",
            "culturadigital": "Bradesco - Cultura Digital",
            "letramentodigital": "Bradesco - Letramento Digital",
            "fundamentosti": "Bradesco - Fundamentos de TI",
            "sharepoint": "Bradesco - Sharepoint",
            "designgrafico": "Area Z - Design Gráfico",
            "aftereffects": "Area Z - After Effects",
            "uspvemsaber": "USP - Vem Saber",
            "uspnegociacao": "USP - Negociação Internacional",
            "certificates": "Certificados",
            "descriptionCertificates": "Certificados de cursos e eventos em que participei."
        },
        "en": {
            "home": "Home",
            "portfolio": "Portfolio",
            "aboutnav": "About me",
            "about": "Hello, my name is",
            "speaktome": "talk to me",
            "scroll": "Scroll down",
            "descriptionAbout": "Driven by curiosity, I strive to turn ideas into captivating visual experiences. This space reflects my passion for innovation.",
            "download": "Download CV",
            "mySkills": "My skills",
            "descriptionMySkills": "Discover the skills I have and the tools I use.",
            "portuguese": "Portuguese",
            "english": "English",
            "deustch": "German",
            "service": "Services",
            "descriptionServices": "Learn about the services I offer and contact me for more information.",
            "services1": "Web Development",
            "services2": "Graphic Design",
            "services3": "Interactive Web Animations",
            "services4": "Animation and Motion Graphics",
            "services5": "Image/Video Editing",
            "services6": "Landing Page Development",
            "free": "HESITATION",
            "your": "IS THE",
            "mind": "DEFEAT",
            "projects": "Projects",
            "descriptionPortfolio": "Check out some of the projects I've developed.",
            "site": "Go to Site",
            "code": "View Code",
            "contact": "Contact",
            "credits": "2024 All rights reserved. Developed by Raffa.",
            "culturadigital": "Bradesco - Digital Culture",
            "letramentodigital": "Bradesco - Digital Literacy",
            "fundamentosti": "Bradesco - IT Fundamentals",
            "sharepoint": "Bradesco - Sharepoint",
            "designgrafico": "Area Z - Graphic Design",
            "aftereffects": "Area Z - After Effects",
            "uspvemsaber": "USP - Vem Saber",
            "uspnegociacao": "USP - International Negotiation",
            "certificates": "Certificates",
            "descriptionCertificates": "Certificates of courses and events I have participated in."
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
