import {
  renderCategories,
  renderModalProductMarkup,
  renderProductMarkup,
} from './js/render-function';

//Логіка сторінки Home

import { btnTheme, initTheme } from './js/helpers.js'; 

initTheme();

const themeBtn = document.querySelector('.theme-btn');

if (themeBtn) {
  themeBtn.addEventListener('click', btnTheme);
}


let page = 1;
renderCategories();

renderProductMarkup(page);

