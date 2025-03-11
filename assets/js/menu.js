document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('checkbox');
    const menuAberto = document.querySelector('.menu-aberto');

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            menuAberto.classList.add('active');
        } else {
            menuAberto.classList.remove('active');
        }
    });
});
