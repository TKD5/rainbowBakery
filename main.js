const hamburgerBtn = document.querySelector('.hamburger-btn');
const sideMenu = document.querySelector('.side-menu');
const buttonTwo = document.querySelector('.btn-2');


hamburgerBtn.addEventListener('click', function() {
    sideMenu.classList.toggle('hidden');
    const isOpened = buttonTwo.getAttribute('aria-expanded');
    if(isOpened === 'false') {
        buttonTwo.setAttribute('aria-expanded', 'true');
    } else {
        buttonTwo.setAttribute('aria-expanded', 'false');
    }
});

buttonTwo.addEventListener('click', function() {
    const isOpened = buttonTwo.getAttribute('aria-expanded');
    if(isOpened === 'false') {
        buttonTwo.setAttribute('aria-expanded', 'true');
    } else {
        buttonTwo.setAttribute('aria-expanded', 'false');
    }
}); 