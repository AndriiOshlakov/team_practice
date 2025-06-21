//Робота з localStorage

import { STORAGE_KEYS } from "./constants"

export function addLocalCart(id) {
    const storageData = JSON.parse(localStorage.getItem(STORAGE_KEYS.CART)) || []
    storageData.push(id)
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(storageData))
}

export function removeLocarCart(id) {
    const storageData = JSON.parse(localStorage.getItem(STORAGE_KEYS.CART))

    const removeItem = storageData.filter((item) => item !== id);
    
    localStorage.setItem(STORAGE_KEYS.CART, removeItem)
}

export function addLocalWish(id) {
    const storageData = JSON.parse(localStorage.getItem(STORAGE_KEYS.WISHLIST)) || []
    storageData.push(id)
    localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(storageData))

    const removeItem = storageData.filter((item) => item !== id);
    
    localStorage.setItem(STORAGE_KEYS.WISHLIST, removeItem)
}

export function removeLocarWish(id) {
    const storageData = JSON.parse(localStorage.getItem(STORAGE_KEYS.WISHLIST))
    
    const removeItem = storageData.filter((item) => item !== id);
    
    localStorage.setItem(STORAGE_KEYS.WISHLIST, removeItem)
}
