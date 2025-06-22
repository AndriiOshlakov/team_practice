//Описана робота модалки - відкриття закриття і все що з модалкою повʼязано
import { refs } from './refs'; // імпортую об'єкт рефс з refs.js
import { getProductById } from './products-api'; // імпортую з products-api.js
import {
  addLocalCart,
  removeLocalCart,
  addLocalWish,
  removeLocalWish,
} from './storage'; // імпортую з storage.js
import { updateCartCount, updateWishlistCount } from './helpers'; // імпортую з helpers.js

// Відкриття модального вікна
export async function openModal(productId) {
  // ф-я відкриття мод. вікна
  try {
    // отримую продукт за айді
    const { data: product } = await getProductById(productId); // враховуємо структуру відповіді від axios
    refs.modal.dataset.id = product.id; // зберігаю id товару в data-атрибут
    renderModal(product); // викликаю рендер модалки
    refs.modal.classList.add('modal--is-open'); // додаю клас відкриття
    window.addEventListener('keydown', onEscPress); // слухаю Esc
    refs.modal.addEventListener('click', onBackdropClick); // слухаю клік на фон
  } catch (error) {
    // обробка помилки
    console.error('Error loading product:', error);
  }
}

// Закриття модального вікна
export function closeModal() {
  refs.modal.classList.remove('modal--is-open'); // видаляю клас
  window.removeEventListener('keydown', onEscPress); // прибираю слухача
  refs.modal.removeEventListener('click', onBackdropClick); // прибираю слухача
  refs.modalProduct.innerHTML = ''; // очищую контент
}

// Закриття через ЕСКЕЙП
function onEscPress(e) {
  // обробка натискання ЕСКЕЙПА
  if (e.key === 'Escape') closeModal();
}

// Закриття при натисканні на бекдроп
function onBackdropClick(e) {
  // обробка натискання на бекдроп
  if (e.target === refs.modal) closeModal();
}

// Рендер модалки
function renderModal(product) {
  // рендер модалки
  refs.modalProduct.innerHTML = ` 
    <img class="modal-product__img" src="${product.thumbnail}" alt="${product.title}" />
    <div class="modal-product__content">
      <p class="modal-product__title">${product.title}</p>
      <ul class="modal-product__tags">
        <li>${product.category}</li>
        <li>${product.brand}</li>
      </ul>
      <p class="modal-product__description">${product.description}</p>
      <p class="modal-product__shipping-information">Shipping: Free</p>
      <p class="modal-product__return-policy">Return: 30 days</p>
      <p class="modal-product__price">Price: $${product.price}</p>
    </div>
  `; // вставляю контент в модалку

  const wishlistBtn = createButton(
    // кнопка для додавання в список
    'wishlist',
    isInWishlist(product.id)
  );
  const cartBtn = createButton('cart', isInCart(product.id)); // кнопка додавання в корзину

  refs.modalProduct.insertAdjacentElement('beforeend', wishlistBtn); // вставляю кнопку в модалку
  refs.modalProduct.insertAdjacentElement('beforeend', cartBtn);
}

// Створення кнопки для додавання в список або корзину
function createButton(type, isAdded) {
  // ф-я для створення кнопки
  const btn = document.createElement('button');
  btn.classList.add('modal-product__btn', `modal-product__btn--${type}`);
  btn.textContent = isAdded // якщо товар вже в списку, то текст кнопки буде "Видалити"
    ? `Remove from ${capitalize(type)}`
    : `Add to ${capitalize(type)}`;

  btn.addEventListener('click', () => {
    const productId = Number(refs.modal.dataset.id); // отримую id з data-id

    if (type === 'cart') {
      if (isInCart(productId)) {
        removeLocalCart(productId); // видаляю з localStorage
        btn.textContent = `Add to Cart`; // змінюю текст
      } else {
        addLocalCart(productId); // додаю в localStorage
        btn.textContent = `Remove from Cart`; // змінюю текст
      }
      updateCartCount(); // оновлюю кількість в кошику
    }

    if (type === 'wishlist') {
      if (isInWishlist(productId)) {
        removeLocalWish(productId); // видаляю
        btn.textContent = `Add to Wishlist`;
      } else {
        addLocalWish(productId); // додаю
        btn.textContent = `Remove from Wishlist`;
      }
      updateWishlistCount(); // оновлюю лічильник
    }
  });

  return btn; // повертаю
}

// Перевірка, чи є товар у Cart
function isInCart(id) {
  // чи є товар в корзині
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  return cart.includes(id);
}

// Чи є товар в Wishlist
function isInWishlist(id) {
  // чи є в списку бажань (товар)
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  return wishlist.includes(id);
}

// Функція для зміни першої літери на велику
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
