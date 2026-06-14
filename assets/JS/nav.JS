const navInput = document.getElementById('nav-input');
const navContent = document.getElementById('nav-content');
const navOpen = document.getElementById('nav-open');

navInput.addEventListener('change', () => {
    if (navInput.checked) {
        navContent.classList.add('open');
        navOpen.classList.add('is-open');
    } else {
        navContent.classList.remove('open');
        navOpen.classList.remove('is-open');
    }
});

navContent.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navInput.checked = false;
        navContent.classList.remove('open');
        navOpen.classList.remove('is-open');
    });
});