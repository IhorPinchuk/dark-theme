import refs from './refs';

// const btnThemeEl = document.querySelector('.btn-theme');
// const headerContainerEl = document.querySelector('.header-container');
// const btnIconMoonEl = document.querySelector('.btn-icon-moon');
// const btnIconSunEl = document.querySelector('.btn-icon-sun');
let headerPosition = refs.headerEl.offsetTop;

function setDarkTheme() {
  document.body.classList.add('dark');

  refs.btnIconSunEl.classList.remove('btn-icon-hidden');
  refs.btnIconMoonEl.classList.add('btn-icon-hidden');
  refs.headerContainerEl.classList.remove('header-container');
  refs.headerContainerEl.classList.add('header-container-dark');
  refs.localStorage.theme = 'dark';
}

function setLightTheme() {
  document.body.classList.remove('dark');

  refs.btnIconMoonEl.classList.remove('btn-icon-hidden');
  refs.btnIconSunEl.classList.add('btn-icon-hidden');
  refs.headerContainerEl.classList.remove('header-container-dark');
  refs.headerContainerEl.classList.add('header-container');
  localStorage.theme = 'light';
}

refs.btnThemeEl.addEventListener('click', () => {
  if (document.body.classList.contains('dark')) {
    setLightTheme();
  } else {
    setDarkTheme();
  }

  if (localStorage.theme === 'dark' && window.pageYOffset > headerPosition) {
    refs.headerContainer.classList.add('fixed-header-dark');
  } else {
    refs.headerContainer.classList.remove('fixed-header-dark');
  }
});

if (localStorage.theme === 'dark') {
  setDarkTheme();
}
