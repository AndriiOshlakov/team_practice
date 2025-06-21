import"./assets/styles-0jjx1hvP.js";let n=JSON.parse(localStorage.getItem("cart"))||[];function u(){const t=document.querySelector(".nav__count");t&&(t.textContent=n.length)}function y(t){return t.filter(e=>n.includes(e.id)).reduce((e,o)=>e+o.price,0)}function C(t){const e=document.querySelector(".products"),o=document.querySelector("[data-count]"),r=document.querySelector("[data-price]"),a=document.querySelector(".cart-summary__btn");if(!e)return;const d=t.filter(c=>n.includes(c.id));if(d.length===0){e.innerHTML="",document.querySelector(".not-found").style.display="block",o&&(o.textContent="0"),r&&(r.textContent="$0"),a&&(a.disabled=!0);return}document.querySelector(".not-found").style.display="none";const l=d.map(({id:c,img:p,name:s,brand:m,category:f,price:_})=>`
      <li class="products__item" data-id="${c}">
        <img class="products__image" src="${p}" alt="${s}"/>
        <p class="products__title">${s}</p>
        <p class="products__brand">
          <span class="products__brand--bold">Brand:</span> ${m}
        </p>
        <p class="products__category">Category: ${f}</p>
        <p class="products__price">Price: $${_}</p>
      </li>
    `).join("");e.innerHTML=l}const g=y(products);itemsCount&&(itemsCount.textContent=cartProducts.length);totalPrice&&(totalPrice.textContent=`$${g}`);buyButton&&(buyButton.disabled=!1);function i(t){const e=document.querySelector(".modal-product__btn--cart");if(e){const o=n.includes(t);e.textContent=o?"Remove from cart":"Add to cart"}}function b(t){const e=n.indexOf(t);e===-1?n.push(t):n.splice(e,1),localStorage.setItem("cart",JSON.stringify(n)),u(),i(t)}document.addEventListener("click",t=>{if(t.target.matches(".modal-product__btn--cart")){const o=t.target.closest(".modal").dataset.productId;b(o)}});document.addEventListener("modalopen",t=>{const e=t.detail.productId;i(e)});document.addEventListener("DOMContentLoaded",()=>{u()});fetchProducts().then(t=>C(t));
//# sourceMappingURL=cart.js.map
