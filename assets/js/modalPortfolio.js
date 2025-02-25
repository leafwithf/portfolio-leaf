
const projects = {
    "portfolio": {
        title: "Portfólio",
        description: "Portfólio próprio para exposição de trabalhos, skills, redes sociais e contato.",
        category: "WEB DESIGN",
        image: "assets/img/prFT/index-ft.png",
        link: "https://portfolioraffa.netlify.app/#inicio"
    },
    "projeto-fotos": {
        title: "Projeto Fotos ",
        description: "Descrição do segundo projeto.",
        category: "Fotografia",
        image: "assets/img/prFT/index-ft.png",
        link: "https://leafwithf.netlify.app"
    },
    "mia": {
        title: "M.I.A. - Empresa Ficticia",
        description: "Descrição do terceiro projeto.",
        category: "Edição de Vídeo",
        image: "assets/img/prFT/index-ft.png",
        link: "https://tccmia.netlify.app"
    },
    "projeto4": {
        title: "Projeto 4",
        description: "Descrição do quarto projeto.",
        category: "Design Gráfico",
        image: "imagem4.jpg",
        link: "https://exemplo.com/projeto4"
    },
    "projeto5": {
        title: "Projeto 5",
        description: "Descrição do quinto projeto.",
        category: "Segurança da Informação",
        image: "imagem5.jpg",
        link: "https://exemplo.com/projeto5"
    },
    "projeto6": {
        title: "Projeto 6",
        description: "Descrição do sexto projeto.",
        category: "E-commerce",
        image: "imagem6.jpg",
        link: "https://exemplo.com/projeto6"
    }
};

function openModal(projectId) {
    const project = projects[projectId];
    
    if (project) {
        document.getElementById("modal-img").src = project.image;
        document.getElementById("modal-title").innerText = project.title;
        document.getElementById("modal-description").innerText = project.description;
        document.getElementById("modal-category").innerText = project.category;
        document.getElementById("details-btn").href = project.link;

        document.getElementById("modal").style.display = "flex";
    }
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

