(() => {
    const track = document.querySelector('.gallery-track');
    const trackWrap = document.querySelector('.gallery-track-wrap');
    const originalItems = Array.from(track.querySelectorAll('.gallery-item'));
    const gap = 20;
    let position = 0;
    let animationId;
    let isDragging = false;
    let prevX = 0;

    originalItems.forEach(item => track.appendChild(item.cloneNode(true)));
    originalItems.forEach(item => track.appendChild(item.cloneNode(true)));

    function getSetWidth() {
        return (track.querySelectorAll('.gallery-item')[0].offsetWidth + gap) * originalItems.length;
    }

    function setPosition(pos) {
        const w = getSetWidth();
        position = ((pos % w) + w) % w;
        track.style.transition = 'none';
        track.style.transform = `translateX(-${position}px)`;
    }

    function startAuto() {
        cancelAnimationFrame(animationId);
        function loop() {
            setPosition(position + 0.5);
            animationId = requestAnimationFrame(loop);
        }
        animationId = requestAnimationFrame(loop);
    }

    function stopAuto() {
        cancelAnimationFrame(animationId);
    }

    // PCドラッグ
    trackWrap.addEventListener('mousedown', (e) => {
        isDragging = true;
        prevX = e.clientX;
        stopAuto();
        trackWrap.style.cursor = 'grabbing';
        e.preventDefault();
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const diff = prevX - e.clientX;
        prevX = e.clientX;
        setPosition(position + diff);
    });

    window.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        trackWrap.style.cursor = 'grab';
        startAuto();
    });

    // スマホスワイプ
    let touchStartX = 0;
    let touchStartPos = 0;

    trackWrap.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartPos = position;
        stopAuto();
    }, { passive: true });

    trackWrap.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const diff = touchStartX - e.touches[0].clientX;
        setPosition(touchStartPos + diff);
    }, { passive: false });

    trackWrap.addEventListener('touchend', () => {
        startAuto();
    }, { passive: true });

    trackWrap.style.cursor = 'grab';
    startAuto();
})();