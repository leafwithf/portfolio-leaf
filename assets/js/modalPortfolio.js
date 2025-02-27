window.projectsPortfolio = {
    "portfolio": {
        title: "Portfólio",
        description: "Portfólio próprio para exposição de trabalhos, skills, redes sociais e contato.",
        category: "Portfólio",
        image: "assets/img/sites/index-pt.png",
        link: "https://portfolioraffa.netlify.app/#inicio",
        repoLink: "https://github.com/leafwithf/portfolio-raffa"  
    },
    "projeto-fotos": {
        title: "Projeto Fotos",
        description: "O site **LeafWithF** é um projeto voltado para fotografia, possivelmente destacando imagens artísticas, portfólio fotográfico ou algum conceito relacionado à natureza e arte visual.",
        category: "Fotografia",
        image: "assets/img/sites/index-ft.png",
        link: "https://leafwithf.netlify.app",
        repoLink: "https://github.com/leafwithf/projeto-fts"  
    },
    "mia": {
        title: "M.I.A.",
        description: "Descrição do terceiro projeto.",
        category: "Empresa de segurança",
        image: "assets/img/sites/index-mia.png",
        link: "https://tccmia.netlify.app",
        repoLink: "https://github.com/leafwithf/mia"  
    }
};

function openModalPortfolio(projectId) {
    const project = projectsPortfolio[projectId];
    if (project) {
        document.getElementById("modal-img").src = project.image;
        document.getElementById("modal-title").innerText = project.title;
        document.getElementById("modal-description").innerText = project.description;
        document.getElementById("modal-category").innerText = project.category;
        document.getElementById("details-btn").href = project.link;
        document.getElementById("repo-btn").href = project.repoLink; 
        document.getElementById("modal-portfolio").style.display = "flex";
    }
}

function closeModalPortfolio() {
    document.getElementById("modal-portfolio").style.display = "none";
}
