function openModal(imageSrc) {
    const modal = document.getElementById('escalaModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImage.src = imageSrc;
}

function closeModal() {
    const modal = document.getElementById('escalaModal');
    modal.style.display = 'none';
}

document.querySelector('.close-modal').addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
    const modal = document.getElementById('escalaModal');
    if (event.target === modal) {
        closeModal();
    }
});

document.querySelector('.button-escala-abril').addEventListener('click', (event) => {
    event.preventDefault();
    openModal('escalas/');
});
