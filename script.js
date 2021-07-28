function buttonMobileNav() {
    let mobileNav = document.getElementById('burger-menu');

    if (mobileNav.classList.contains('burger-menu__open')) {
        mobileNav.classList.remove('burger-menu__open');
    } else {
        mobileNav.classList.add('burger-menu__open');
    }
}