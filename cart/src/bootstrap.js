import {faker} from '@faker-js/faker';

const mountCart = (el) => {
    el.innerHTML = `You have ${faker.number.int()} items in your cart`;
}

if (process.env.NODE_ENV === 'development') {
    const el = document.getElementById('cart-app');
    if (el) {
        mountCart(el);
    }
}

export { mountCart }