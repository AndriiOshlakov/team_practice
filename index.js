import{i as m,b as l}from"./assets/helpers-GpbVV26d.js";import{a as o,i as a}from"./assets/vendor-D9ezOI0e.js";o.defaults.baseURL="https://dummyjson.com";async function p(){try{const{data:t}=await o("/products/categories");return t}catch(t){a.error({message:t.message,position:"topRight"})}}async function _(t){const e=`/products?limit=12&skip=${(t-1)*12}`;try{const{data:r}=await o(e);return r}catch(r){a.error({message:r.message,position:"topRight"})}}const n={categoryList:document.querySelector(".categories"),productList:document.querySelector(".products"),cartList:document.querySelector(".cart-summary__list"),notFound:document.querySelector(".not-found"),searchForm:document.querySelector(".search-form"),searchFormInput:document.querySelector(".search-form__input"),searchFormClearBtn:document.querySelector(".search-form__btn-clear"),searchFormBtn:document.querySelector(".search-form__btn"),navList:document.querySelector(".nav__list"),homeLink:document.querySelector('.nav__link[href="./index.html"]'),cartLink:document.querySelector('.nav__link[href="./cart.html"]'),wishlistLink:document.querySelector('.nav__link[href="./wishlist.html"]'),modal:document.querySelector(".modal"),modalCloseBtn:document.querySelector(".modal__close-btn"),modalProd:document.querySelector(".modal-product"),modalProdWishBtn:document.querySelector(".modal-product__btn--wishlist"),modalProdCartBtn:document.querySelector(".modal-product__btn--cart")},y=t=>t.map(({name:e})=>`<li class="categories__item">
   <button class="categories__btn" type="button">${e}</button>
 </li>
`).join(""),h=async()=>{const t=await p();t.unshift({name:"All"}),n.categoryList.insertAdjacentHTML("beforeend",y(t))},g=t=>t.map(({id:e,thumbnail:r,title:c,brand:u,category:i,price:d})=>`
        <li class="products__item" data-id="${e}">
          <img class="products__image" src="${r}" alt="${c}"/>
          <p class="products__title">${c}</p>
          <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${u}</p>
          <p class="products__category">Category: ${i}</p>
          <p class="products__price">Price: $${d}</p>
        </li>
      `).join(""),b=async t=>{const{products:e}=await _(t);n.productList.insertAdjacentHTML("beforeend",g(e))};m();const s=document.querySelector(".theme-btn");s&&s.addEventListener("click",l);let f=1;h();b(f);
//# sourceMappingURL=index.js.map
