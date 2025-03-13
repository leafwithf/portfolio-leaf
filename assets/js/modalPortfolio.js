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
