const toggleSwitch = document.querySelector(".switch input");

toggleSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});
