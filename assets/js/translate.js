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
            "download": "Baixar o Currículo",
            "mySkills": "Minhas habilidades",
            "descriptionMySkills": "Conheça as habilidades que possuo e as ferramentas que utilizo.",
            "portuguese": "Português",
            "english": "Inglês",
            "deustch": "Alemão",
            "service": "Serviços",
            "descriptionServices": "Conheça os serviços que ofereço e entre em contato para saber mais.",
            "services1": "Desenvolvedor Web",
            "services2": "Design Gráfico",
            "services3": "Animações para web",
            "services4": "Videomaker",
            "services5": "Photoshop e VFX",
            "free": "HESITAÇÃO",
            "your": "É A",
            "mind": "DERROTA",
            "projects": "Projetos",
            "descriptionPortfolio": "Confira alguns dos projetos que desenvolvi.",
            "site": "Ir ao Site",
            "code": "Ver Código",
            "contact": "Contato",
            "credits": "2024 Todos os direitos reservados. Desenvolvido por Raffa.",
            "certificates": "Certificados",
            "descriptionCertificates": "Certificados de cursos e eventos em que participei.",
            "bttncertificates": "Ver Certificados",
            "form-contact": "Entre em contato",
            "title-contact": "Fale comigo",
            "description-contact": "Entre em contato para colaborações, projetos ou apenas para trocar ideias! Estou sempre aberto a novas oportunidades e desafios na área de tecnologia.",
            "name": "Nome",
            "email": "E-mail",
            "message": "Mensagem",
            "send": "Enviar"
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
            "services3": "Web Animations",
            "services4": "Videomaker",
            "services5": "Photoshop and VFX",
            "free": "HESITATION",
            "your": "IS THE",
            "mind": "DEFEAT",
            "projects": "Projects",
            "descriptionPortfolio": "Check out some of the projects I've developed.",
            "site": "Go to Site",
            "code": "View Code",
            "contact": "Contact",
            "credits": "2024 All rights reserved. Developed by Raffa.",
            "certificates": "Certificates",
            "descriptionCertificates": "Certificates of courses and events I have participated in.",
            "bttncertificates": "View Certificates",
            "form-contact": "Get in touch",
            "title-contact": "Contact me",
            "description-contact": "Get in touch for collaborations, projects, or just to exchange ideas! I'm always open to new opportunities and challenges in the tech field.",
            "name": "Name",
            "email": "Email",
            "message": "Message",
            "send": "Send"
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
