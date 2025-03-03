    window.projectsPortfolio = {
        "portfolio": {
            title: "Portfólio",
            description: "Portfólio próprio para exposição de trabalhos, skills, redes sociais e contato.",
            category: "Portfólio",
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
            title: "Projeto Fotos",
            description: "É um projeto voltado para fotografia, possivelmente destacando imagens artísticas, portfólio fotográfico ou algum conceito relacionado à natureza e arte visual.",
            category: "Fotografia",
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
            title: "M.I.A.",
            description: "Descrição do terceiro projeto.",
            category: "Empresa de segurança",
            image: "assets/img/sitesfts/MIA/cliente-mia.png",
            link: "https://tccmia.netlify.app",
            repoLink: "https://github.com/leafwithf/mia",
            technologies: [
                `<img src="assets/img/svg/html5.svg" alt="HTML5" width="40" height="40">`,
                `<img src="assets/img/svg/css3.svg" alt="CSS3" width="40" height="40">`,
                `<img src="assets/img/svg/react.svg" alt="React" width="40" height="40">`
            ]
        },

        "vidloader": {
            title: "VidLoader.",
            description: "Descrição do terceiro projeto.",
            category: "Site de download de vídeos",
            image: "assets/img/sitesfts/MIA/cliente-mia.png",
            link: "https://tccmia.netlify.app",
            repoLink: "https://github.com/leafwithf/mia",
            technologies: [
                `<img src="assets/img/svg/html5.svg" alt="HTML5" width="40" height="40">`,
                `<img src="assets/img/svg/css3.svg" alt="CSS3" width="40" height="40">`,
                `<img src="assets/img/svg/react.svg" alt="React" width="40" height="40">`
            ]
        }
    };

    function openModalPortfolio(projectId) {
        const project = window.projectsPortfolio[projectId];
        if (project) {
            document.getElementById("modal-img").src = project.image;
            document.getElementById("modal-title").innerText = project.title;
            document.getElementById("modal-description").innerText = project.description;
            document.getElementById("modal-category").innerText = project.category;
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
