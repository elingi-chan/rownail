(() => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const overlay = document.getElementById('modal-overlay');
    const closeBtn = document.getElementById('modal-close');

    document.querySelectorAll('.gallery-track img').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modal.classList.add('open');
        });
    });

    overlay.addEventListener('click', () => modal.classList.remove('open'));
    closeBtn.addEventListener('click', () => modal.classList.remove('open'));
})();