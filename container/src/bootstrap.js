import { mountProducts } from 'products/productsIndex';
import { mountCart } from 'cart/cartIndex';

const productsContainer = document.getElementById('products-container');
const cartContainer = document.getElementById('cart-container');

mountProducts(productsContainer);
mountCart(cartContainer);

console.log('container');