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
        if (isPortuguese) {
            languageIcon.src = "assets/img/svg/BrasilPB.svg";
        } else {
            languageIcon.src = "assets/img/svg/USAPB.svg";
        }
    });

    function updateTranslations() {
        if (isPortuguese) {
            buttonText.textContent = translations.pt.visualize;
        } else {
            buttonText.textContent = translations.en.visualize;
        }
    }

    document.getElementById("toggle-certificates").addEventListener("click", function () {
        let section = document.getElementById("certificates");
        section.classList.toggle("active");

        if (section.classList.contains("active")) {
            if (isPortuguese) {
                buttonText.textContent = translations.pt.less; 
            } else {
                buttonText.textContent = translations.en.less; 
            }

            arrowIcons.forEach(arrow => arrow.src = "assets/img/svg/arrowUp.svg");
            if (isPortuguese) {
                buttonText.textContent = translations.pt.visualize; 
            } else {
                buttonText.textContent = translations.en.visualize;
            }

            arrowIcons.forEach(arrow => arrow.src = "assets/img/svg/arrowDown.svg");
        }
    });

    updateTranslations();
});
