// Функції, які передаються колбеками в addEventListners

import {
  markupCategories,
  getsearchForm,
  renderModalProductMarkup,
} from './render-function';

export function markupCategories(event) {
  const btn = event.target.textContent;
  console.log(btn);
}

export function getsearchForm(event) {
  event.preventDefault();
  const value = event.currentTarget.elements.search.value.trim();
  console.log(value);
}

export function renderModalProductMarkup(event) {
  onModal(id);
}
