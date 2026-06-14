const parallaxImgs = document.querySelectorAll('.parallax-img');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    parallaxImgs[0].style.transform = `translateY(${scrollY * -0.2}px)`;
    parallaxImgs[1].style.transform = `translateY(${scrollY * -0.05}px)`;
    parallaxImgs[2].style.transform = `translateY(${scrollY * -0.1}px)`;
    parallaxImgs[3].style.transform = `translateY(${scrollY * -0.15}px)`;
});