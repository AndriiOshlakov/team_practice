//Обʼєкт з посиланнями на ДОМ елементи

export const refs = {
  // Lists

  categoryList: document.querySelector('.categories'),
  productList: document.querySelector('.products'),
  cartList: document.querySelector('.cart-summary__list'),

  // Not found

  notFound: document.querySelector('.not-found'),

  // Search form

  searchForm: document.querySelector('.search-form'),
  searchFormInput: document.querySelector('.search-form__input'),
  searchFormClearBtn: document.querySelector('.search-form__btn-clear'),
  searchFormBtn: document.querySelector('.search-form__btn'),

  // Navigation

  navList: document.querySelector('.nav__list'),
  homeLink: document.querySelector('.nav__link[href="./index.html"]'),
  cartLink: document.querySelector('.nav__link[href="./cart.html"]'),
  wishlistLink: document.querySelector('.nav__link[href="./wishlist.html"]'),

  // Modal
  modal: document.querySelector('.modal'),
  modalCloseBtn: document.querySelector('.modal__close-btn'),
  modalProd: document.querySelector('.modal-product'),
  modalProdWishBtn: document.querySelector('.modal-product__btn--wishlist'),
  modalProdCartBtn: document.querySelector('.modal-product__btn--cart'),
};
