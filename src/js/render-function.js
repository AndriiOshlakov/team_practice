//Функцію для створення, рендеру або видалення розмітки
import {getCategoriesFromApi, getProducts} from products-api.js

export const markupCategories = categories=> {
    return categories
        .map(
            ({ name }) => `<li class="categories__item">
   <button class="categories__btn" type="button">${name}</button>
 </li>
`
        ).join("");
}

export const renderCategories = async () => {
    const categoriesArr = await getCategoriesFromApi();
    refs.categoryList.insertAdjacentHTML('beforeend',markupCategories(categoriesArr))
}


export const createProductMarkup = products => {
    return products
      .map(
        ({id,thumbnail,title,brand,category,price}) => `
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
  
export const renderProductMarkup = async () => {
    const productsArr = await getProducts();
    refs.productsList.insertAdjacentHTML('beforeend',markupCategories(productsArr))
}
   



