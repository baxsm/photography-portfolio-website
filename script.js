// change nav style on scroll
window.addEventListener('scroll', function () {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
});

//contact buttons (circular text buttons)
const textButtons = document.querySelectorAll('.contact__btn');
textButtons.forEach(textButton => {
    let text = textButton.querySelector('p');
    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 12}deg);">${character}</span>`).join('');
});


// swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 60
        }
    }
});

//
const nav = document.querySelector('.nav__links');
const openNavButton = document.querySelector('#nav__toggle-open');
const closeNavButton = document.querySelector('#nav__toggle-close');

const openNav = () => {
    nav.style.display = 'flex';
    openNavButton.style.display = 'none';
    closeNavButton.style.display = 'inline-block';
}

const closeNav = () => {
    nav.style.display = 'none';
    openNavButton.style.display = 'inline-block';
    closeNavButton.style.display = 'none';
}

openNavButton.addEventListener('click', openNav);
closeNavButton.addEventListener('click', closeNav);

nav.querySelectorAll('li a').forEach(navLink => {
    navLink.addEventListener('click', closeNav);
});

if(document.body.clientWidth < 1024) {
    nav.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener('click', closeNav);
    });
}
