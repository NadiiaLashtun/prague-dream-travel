let toggleMobileMenu = () => {
  mobileBtnElement.classList.toggle('open');
  navMenuElement.classList.toggle('open');
};

let mobileBtnElement = document.querySelector('.mobile-btn');
let navMenuElement = document.querySelector('.nav-menu');

mobileBtnElement.addEventListener('click', toggleMobileMenu);

window.addEventListener('resize', () => {
  navMenuElement.style.transition = 'none';

  if (window.innerWidth > 1024) {
    navMenuElement.classList.remove('open');
    mobileBtnElement.classList.remove('open');
  }

  // back transition
  requestAnimationFrame(() => {
    navMenuElement.style.transition = '';
  });
});
