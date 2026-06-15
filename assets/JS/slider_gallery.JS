(() => {
    const track = document.querySelector('.gallery-track');
    const originalItems = Array.from(track.querySelectorAll('.gallery-item'));
    const gap = 20;
    let galleryCurrent = 0;
    let autoTimer;

    originalItems.forEach(item => {
        track.appendChild(item.cloneNode(true));
    });
    originalItems.forEach(item => {
        track.insertBefore(item.cloneNode(true), track.firstChild);
    });

    const total = originalItems.length;

    function getItemWidth() {
        return track.querySelectorAll('.gallery-item')[0].offsetWidth + gap;
    }

    function init() {
        galleryCurrent = total;
        track.style.transition = 'none';
        track.style.transform = `translateX(-${galleryCurrent * getItemWidth()}px)`;
    }

    function moveTo(index) {
        galleryCurrent = index;
        track.style.transition = 'transform 0.6s ease';
        track.style.transform = `translateX(-${galleryCurrent * getItemWidth()}px)`;
    }

    track.addEventListener('transitionend', () => {
        if (galleryCurrent >= total * 2) {
            galleryCurrent = total;
            track.style.transition = 'none';
            track.style.transform = `translateX(-${galleryCurrent * getItemWidth()}px)`;
        }
        if (galleryCurrent <= 0) {
            galleryCurrent = total;
            track.style.transition = 'none';
            track.style.transform = `translateX(-${galleryCurrent * getItemWidth()}px)`;
        }
    });

    function startAuto() {
        autoTimer = setInterval(() => {
            moveTo(galleryCurrent + 1);
        }, 3000);
    }

    document.querySelector('.prev').addEventListener('click', () => {
        clearInterval(autoTimer);
        moveTo(galleryCurrent - 1);
        startAuto();
    });

    document.querySelector('.next').addEventListener('click', () => {
        clearInterval(autoTimer);
        moveTo(galleryCurrent + 1);
        startAuto();
    });

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
        e.preventDefault();
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

    init();
    startAuto();
})();