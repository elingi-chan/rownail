(() => {
    const slides = document.querySelectorAll('.slide');
    let current = 0;
    const switchAt = 3000;

    function next() {
        const prev = current;
        current = (current + 1) % slides.length;

        slides[current].classList.add('active');
        void slides[current].offsetWidth;
        slides[current].classList.add('zoomin');

        slides[prev].classList.remove('active');
        setTimeout(() => {
            slides[prev].classList.remove('zoomin');
        }, 1000);

        setTimeout(next, switchAt);
    }

    slides[0].classList.add('active', 'zoomin');
    setTimeout(next, switchAt);
})();