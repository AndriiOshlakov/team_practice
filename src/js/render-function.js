//Функцію для створення, рендеру або видалення розмітки
import { getCategoriesFromApi, getProducts } from './products-api.js';
import { refs } from './refs.js';

export const markupCategories = categories => {
  return categories
    .map(
      ({ name }) => `<li class="categories__item">
   <button class="categories__btn" type="button">${name}</button>
 </li>
`
    )
    .join('');
};

export const renderCategories = async () => {
  const categoriesArr = await getCategoriesFromApi();
  categoriesArr.unshift({ name: 'All' });
  refs.categoryList.insertAdjacentHTML(
    'beforeend',
    markupCategories(categoriesArr)
  );
};

export const createProductMarkup = products => {
  return products
    .map(
      ({ id, thumbnail, title, brand, category, price }) => `
        <li class="products__item" data-id="${id}">
          <img class="products__image" src="${thumbnail}" alt="${title}"/>
          <p class="products__title">${title}</p>
          <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${brand}</p>
          <p class="products__category">Category: ${category}</p>
          <p class="products__price">Price: $${price}</p>
        </li>
      `
    )
    .join('');
};

export const renderProductMarkup = async currentPage => {
  const { products } = await getProducts(currentPage);
  refs.productList.insertAdjacentHTML(
    'beforeend',
    createProductMarkup(products)
  );
};

export const createModalProductMarkup = product => {
  const {
    id,
    thumbnail,
    title,
    description,
    price,
    tags = [],
    shippingInformation = 'Free shipping',
    returnPolicy = '30 days return',
  } = product;

  const tagMarkup = tags.map(tag => `<li>${tag}</li>`).join('');

  return `
        <img class="modal-product__img" src="${thumbnail}" alt="${title}" />
        <div class="modal-product__content">
          <p class="modal-product__title">${title}</p>
          ${
            tags.length
              ? `<ul class="modal-product__tags">${tagMarkup}</ul>`
              : ''
          }
          <p class="modal-product__description">${description}</p>
          <p class="modal-product__shipping-information">Shipping: ${shippingInformation}</p>
          <p class="modal-product__return-policy">Return Policy: ${returnPolicy}</p>
          <p class="modal-product__price">Price: $${price}</p>
          <div class="modal-product__buttons">
            <button class="modal-product__wishlist-btn" type="button" data-id="${id}">
              Add to Wishlist
            </button>
            <button class="modal-product__cart-btn" type="button" data-id="${id}">
              Add to Cart
            </button>
          </div>
        </div>`;
};

export const renderModalProductMarkup = async productId => {
  const product = await getProductById(productId);
  const markup = createModalProductMarkup(product);
  refs.modalProd.innerHTML = markup;
};
