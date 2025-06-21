import"./assets/styles-0jjx1hvP.js";import{a as o,i as s}from"./assets/vendor-D9ezOI0e.js";o.defaults.baseURL="https://dummyjson.com";async function d(){try{const{data:t}=await o("/products/categories");return t}catch(t){s.error({message:t.message,position:"topRight"})}}async function l(t){const e=`/products?limit=12&skip=${(t-1)*12}`;try{const{data:r}=await o(e);return r}catch(r){s.error({message:r.message,position:"topRight"})}}const a={categoryList:document.querySelector(".categories"),productList:document.querySelector(".products"),cartList:document.querySelector(".cart-summary__list"),notFound:document.querySelector(".not-found"),searchForm:document.querySelector(".search-form"),searchFormInput:document.querySelector(".search-form__input"),searchFormClearBtn:document.querySelector(".search-form__btn-clear"),searchFormBtn:document.querySelector(".search-form__btn"),navList:document.querySelector(".nav__list"),homeLink:document.querySelector('.nav__link[href="./index.html"]'),cartLink:document.querySelector('.nav__link[href="./cart.html"]'),wishlistLink:document.querySelector('.nav__link[href="./wishlist.html"]'),modalCloseBtn:document.querySelector(".modal__close-btn"),modalProd:document.querySelector(".modal-product"),modalProdWishBtn:document.querySelector(".modal-product__btn--wishlist"),modalProdCartBtn:document.querySelector(".modal-product__btn--cart")},m=t=>t.map(({name:e})=>`<li class="categories__item">
   <button class="categories__btn" type="button">${e}</button>
 </li>
`).join(""),p=async()=>{const t=await d();t.unshift({name:"All"}),a.categoryList.insertAdjacentHTML("beforeend",m(t))},_=t=>t.map(({id:e,thumbnail:r,title:c,brand:n,category:u,price:i})=>`
        <li class="products__item" data-id="${e}">
          <img class="products__image" src="${r}" alt="${c}"/>
          <p class="products__title">${c}</p>
          <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${n}</p>
          <p class="products__category">Category: ${u}</p>
          <p class="products__price">Price: $${i}</p>
        </li>
      `).join(""),y=async t=>{const{products:e}=await l(t);a.productList.insertAdjacentHTML("beforeend",_(e))};let h=1;p();y(h);
//# sourceMappingURL=index.js.map
