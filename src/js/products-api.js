// Функції для роботи з бекендом
import axios from 'axios';
import iziToast from 'izitoast';

axios.defaults.baseURL = 'https://dummyjson.com';

export async function getCategoriesFromApi() {
  try {
    const { data } = await axios('/products/categories');

    return data;
  } catch (error) {
    iziToast.error({ message: error.message, position: 'topRight' });
  }
}

export async function getProducts(currentPage) {
  const url = `/products?limit=12&skip=${(currentPage - 1) * 12}`;
  try {
    const { data } = await axios(url);
    return data;
  } catch (error) {
    iziToast.error({ message: error.message, position: 'topRight' });
  }
}

export async function getProductsToCategory(category) {
  try {
    const data = await axios(`/products/category/${category}`);
    return data;
  } catch (error) {
    iziToast.error({ message: error.message, position: 'topRight' });
  }
}

export async function getProductById(id) {
  try {
    const data = await axios(`/products/${id}`);
    return data;
  } catch (error) {
    iziToast.error({ message: error.message, position: 'topRight' });
  }
}

export async function getProductByName(productName) {
  try {
    const data = await axios(`/products/search?q=${productName}`);
    return data;
  } catch (error) {
    iziToast.error({ message: error.message, position: 'topRight' });
  }
}
