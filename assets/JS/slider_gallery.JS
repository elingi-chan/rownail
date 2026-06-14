const trackWrap = document.querySelector('.gallery-track-wrap');
let touchStartX = 0;
let touchEndX = 0;
let isDragging = false;

trackWrap.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    isDragging = true;
}, { passive: true });

trackWrap.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault(); // 縦スクロールと競合しないよう防止
}, { passive: false });

trackWrap.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    isDragging = false;
    touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 30) {
        clearInterval(autoTimer);
        if (diff > 0) {
            moveTo(galleryCurrent + 1);
        } else {
            moveTo(galleryCurrent - 1);
        }
        startAuto();
    }
}, { passive: true });