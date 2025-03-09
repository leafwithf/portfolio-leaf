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
