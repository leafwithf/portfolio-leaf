document.addEventListener("dragstart", function (event) {
    if (event.target.tagName === "IMG", "PNG") {
        event.preventDefault();
    }
});
