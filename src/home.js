import {
  renderCategories,
  renderModalProductMarkup,
  renderProductMarkup,
} from './js/render-function';

//Логіка сторінки Home

let page = 1;
renderCategories();

renderProductMarkup(page);
