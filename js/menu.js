(() => {
    const refs = {
        openMenuBtn: document.querySelector('.header__btn'),
        closeMenuBtn: document.querySelector('.mobile__close-btn'),
        menu: document.querySelector('.mobile'),
    };

    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);

    function toggleMenu() {
        refs.menu.classList.toggle('is-hidden');
        refs.body.classList.toggle('no-scroll');
    }
})();
