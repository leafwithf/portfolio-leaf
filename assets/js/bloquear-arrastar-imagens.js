document.addEventListener("dragstart", function (event) {
    if (event.target.tagName === "IMG") {
        event.preventDefault();
    }
});
