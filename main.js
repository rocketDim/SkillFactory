const MENU_LINKS = document.querySelectorAll('header__menu-link');

MENU_LINKS.forEach(link => link.addEventListener('click', event => {
    event.preventDefault();

    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
}));

const HERO_DOTS = document.querySelectorAll('.hero__dot');
const HERO_IMAGE = document.querySelectorAll('.hero__image');
const HERO_TITLE = document.querySelectorAll('.hero__title');
const HERO_TITLES = [
    'Разработано 2000+ приложений',
    'Бесплатные приложения',
    'Тысячи довольных клиентов'
]

HERO_DOTS.forEach((dot, index) => dot.addEventListener('click', () => {
    HERO_DOTS.forEach(el => {
        el.classList.remove('active');
    });

    dot.classList.add('active');
    HERO_IMAGE.src = 'Component/hero_${index + 1}.jpg';
    HERO_TITLE.textContent = HERO_TITLES[index];
}));
