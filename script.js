const navBtn = document.querySelector('.nav__button');
const navBtnIcon = document.querySelector('.nav__button-icon');
const headerNav = document.querySelector('.nav');

const updateMenuIcon = () => {
  if (navBtnIcon.getAttribute('src') === 'images/icon-hamburger.svg') {
    navBtnIcon.src = 'images/icon-close.svg';
  } else {
    navBtnIcon.src = 'images/icon-hamburger.svg';
  }
};

const showMobileNav = () => {
  headerNav.classList.toggle('nav--active');
};

const toggleNav = () => {
  updateMenuIcon();
  showMobileNav();
};

navBtn.addEventListener('click', toggleNav);
