const menuBtn = document.querySelector('.humberg');
const navList = document.querySelector('.navbar__list');
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navList.classList.toggle('open_nav');
});