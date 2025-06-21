//Логіка сторінки Cart

// Ініціалізація масиву кошика з localStorage або пустого масиву
export let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

// Функція для оновлення кількості товарів у кошику в навігації
export function updateCartCount() {
  const cartCount = document.querySelector('.nav__count');
  if (cartCount) {
    cartCount.textContent = cartItems.length;
  }
}

// Функція для оновлення тексту кнопки
export function updateCartButtonText(productId) {
  const addToCartBtn = document.querySelector('.modal-product__btn--cart');
  if (addToCartBtn) {
    const isInCart = cartItems.includes(productId);
    addToCartBtn.textContent = isInCart ? 'Remove from cart' : 'Add to cart';
  }
}

// Функція для додавання/видалення товарів з кошика
export function toggleCartItem(productId) {
  const index = cartItems.indexOf(productId);

  if (index === -1) {
    // Додати до кошика
    cartItems.push(productId);
  } else {
    // Видалити з кошика
    cartItems.splice(index, 1);
  }

  // Оновити localStorage
  localStorage.setItem('cart', JSON.stringify(cartItems));

  // Оновити UI
  updateCartCount();
  updateCartButtonText(productId);
}

// Функція для рендерингу продуктів у кошику
export function renderCartProducts(products) {
  const productsList = document.querySelector('.products');

  if (!productsList) return;

  const cartProducts = products.filter(product =>
    cartItems.includes(product.id)
  );

  const markup = cartProducts
    .map(
      ({ id, img, name, brand, category, price }) => `
      <li class="products__item" data-id="${id}">
        <img class="products__image" src="${img}" alt="${name}"/>
        <p class="products__title">${name}</p>
        <p class="products__brand">
          <span class="products__brand--bold">Brand:</span> ${brand}
        </p>
        <p class="products__category">Category: ${category}</p>
        <p class="products__price">Price: $${price}</p>
      </li>
    `
    )
    .join('');

  productsList.innerHTML = markup;
}

// Event listener кнопки модалки
document.addEventListener('click', e => {
  if (e.target.matches('.modal-product__btn--cart')) {
    const modal = e.target.closest('.modal');
    const productId = modal.dataset.productId;
    toggleCartItem(productId);
  }
});

// Event listener відкриття модалки
document.addEventListener('modalopen', e => {
  const productId = e.detail.productId;
  updateCartButtonText(productId);
});

// Ініціалізувати оновлення кількості товарів у кошику при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
});

fetchProducts().then(products => renderCartProducts(products));
