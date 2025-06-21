import"./assets/styles-0jjx1hvP.js";let c=JSON.parse(localStorage.getItem("cart"))||[];function a(){const t=document.querySelector(".nav__count");t&&(t.textContent=c.length)}function d(t){const e=document.querySelector(".modal-product__btn--cart");if(e){const o=c.includes(t);e.textContent=o?"Remove from cart":"Add to cart"}}function m(t){const e=c.indexOf(t);e===-1?c.push(t):c.splice(e,1),localStorage.setItem("cart",JSON.stringify(c)),a(),d(t)}function _(t){const e=document.querySelector(".products");if(!e)return;const s=t.filter(r=>c.includes(r.id)).map(({id:r,img:u,name:n,brand:i,category:l,price:p})=>`
      <li class="products__item" data-id="${r}">
        <img class="products__image" src="${u}" alt="${n}"/>
        <p class="products__title">${n}</p>
        <p class="products__brand">
          <span class="products__brand--bold">Brand:</span> ${i}
        </p>
        <p class="products__category">Category: ${l}</p>
        <p class="products__price">Price: $${p}</p>
      </li>
    `).join("");e.innerHTML=s}document.addEventListener("click",t=>{if(t.target.matches(".modal-product__btn--cart")){const o=t.target.closest(".modal").dataset.productId;m(o)}});document.addEventListener("modalopen",t=>{const e=t.detail.productId;d(e)});document.addEventListener("DOMContentLoaded",()=>{a()});fetchProducts().then(t=>_(t));
//# sourceMappingURL=cart.js.map
