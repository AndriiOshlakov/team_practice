//Логіка сторінки Wishlist
import { initTheme, btnTheme } from './js/helpers.js';

initTheme();

document.querySelector('.theme-btn')?.addEventListener('click', btnTheme);
