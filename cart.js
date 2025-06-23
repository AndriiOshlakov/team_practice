import{i as C,b}from"./assets/helpers-GpbVV26d.js";C();var u;(u=document.querySelector(".theme-btn"))==null||u.addEventListener("click",b);let n=JSON.parse(localStorage.getItem("cart"))||[];function i(){const t=document.querySelector(".nav__count");t&&(t.textContent=n.length)}function g(t){return t.filter(e=>n.includes(e.id)).reduce((e,o)=>e+o.price,0)}function S(t){const e=document.querySelector(".products"),o=document.querySelector("[data-count]"),r=document.querySelector("[data-price]"),a=document.querySelector(".cart-summary__btn");if(!e)return;const d=t.filter(c=>n.includes(c.id));if(d.length===0){e.innerHTML="",document.querySelector(".not-found").style.display="block",o&&(o.textContent="0"),r&&(r.textContent="$0"),a&&(a.disabled=!0);return}document.querySelector(".not-found").style.display="none";const m=d.map(({id:c,img:p,name:s,brand:f,category:_,price:y})=>`
      <li class="products__item" data-id="${c}">
        <img class="products__image" src="${p}" alt="${s}"/>
        <p class="products__title">${s}</p>
        <p class="products__brand">
          <span class="products__brand--bold">Brand:</span> ${f}
        </p>
        <p class="products__category">Category: ${_}</p>
        <p class="products__price">Price: $${y}</p>
      </li>
    `).join("");e.innerHTML=m}const $=g(products);itemsCount&&(itemsCount.textContent=cartProducts.length);totalPrice&&(totalPrice.textContent=`$${$}`);buyButton&&(buyButton.disabled=!1);function l(t){const e=document.querySelector(".modal-product__btn--cart");if(e){const o=n.includes(t);e.textContent=o?"Remove from cart":"Add to cart"}}function h(t){const e=n.indexOf(t);e===-1?n.push(t):n.splice(e,1),localStorage.setItem("cart",JSON.stringify(n)),i(),l(t)}document.addEventListener("click",t=>{if(t.target.matches(".modal-product__btn--cart")){const o=t.target.closest(".modal").dataset.productId;h(o)}});document.addEventListener("modalopen",t=>{const e=t.detail.productId;l(e)});document.addEventListener("DOMContentLoaded",()=>{i()});fetchProducts().then(t=>S(t));
//# sourceMappingURL=cart.js.map
