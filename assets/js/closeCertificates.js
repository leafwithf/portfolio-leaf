document.getElementById("toggle-certificates").addEventListener("click", function() {
    let section = document.getElementById("certificates");
    section.classList.toggle("active");

    let buttonText = document.getElementById("button-text");
    
    // Alterar o texto do botão
    if (section.classList.contains("active")) {
        buttonText.textContent = "Esconder";
    } else {
        buttonText.textContent = "Mostrar";
    }
});
