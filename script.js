function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');  
}

window.addEventListener('scroll', function() {
    const smallNav = document.querySelector('.small-nav');
    if (window.scrollY > 100 && window.innerWidth > 600) {
        smallNav.style.display = 'flex';
    } else {
        smallNav.style.display = 'none';
    }
});