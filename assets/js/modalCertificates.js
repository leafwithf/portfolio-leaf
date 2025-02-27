function openModal(certificate) {
    var modal = document.getElementById('certificateModal');
    var modalImage = document.getElementById('modalCertificateImage');
    var caption = document.getElementById('captionCertificate');

    var images = {
        'html5': 'assets/img/certificates/html5.png',
        'css3': 'assets/img/certificates/css3.jpg',
        'js': 'assets/img/certificates/js.jpg',
        'ts': 'assets/img/certificates/js.jpg',
    };

    if (images[certificate]) {
        modalImage.src = images[certificate];
        caption.innerHTML = certificate.toUpperCase();
        modal.style.display = 'block';
    }
}

function closeModal() {
    var modal = document.getElementById('certificateModal');
    modal.style.display = 'none';
}
