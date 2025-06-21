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

// Функція для підрахунку загальної вартості
function calculateTotal(products) {
  return products
    .filter(product => cartItems.includes(product.id))
    .reduce((total, product) => total + product.price, 0);
}

// Функція для рендерингу продуктів у кошику
export function renderCartProducts(products) {
  const productsList = document.querySelector('.products');
  const itemsCount = document.querySelector('[data-count]');
  const totalPrice = document.querySelector('[data-price]');
  const buyButton = document.querySelector('.cart-summary__btn');

  if (!productsList) return;

  const cartProducts = products.filter(product =>
    cartItems.includes(product.id)
  );

  if (cartProducts.length === 0) {
    productsList.innerHTML = '';

    document.querySelector('.not-found').style.display = 'block';

    if (itemsCount) itemsCount.textContent = '0';
    if (totalPrice) totalPrice.textContent = '$0';
    if (buyButton) buyButton.disabled = true;
    return;
  }

  document.querySelector('.not-found').style.display = 'none';

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

const total = calculateTotal(products);
if (itemsCount) itemsCount.textContent = cartProducts.length;
if (totalPrice) totalPrice.textContent = `$${total}`;
if (buyButton) buyButton.disabled = false;

export function updateCartButtonText(productId) {
  const addToCartBtn = document.querySelector('.modal-product__btn--cart');
  if (addToCartBtn) {
    const isInCart = cartItems.includes(productId);
    addToCartBtn.textContent = isInCart ? 'Remove from cart' : 'Add to cart';
  }
}

export function toggleCartItem(productId) {
  const index = cartItems.indexOf(productId);

  if (index === -1) {
    cartItems.push(productId);
  } else {
    cartItems.splice(index, 1);
  }

  localStorage.setItem('cart', JSON.stringify(cartItems));
  updateCartCount();
  updateCartButtonText(productId);
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
