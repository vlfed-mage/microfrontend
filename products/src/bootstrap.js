import { faker } from '@faker-js/faker';

const mountProducts = (el) => {
    let products = '';

    for (let i = 0; i < 3; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    el.innerHTML = products;
}

if (process.env.NODE_ENV === 'development') {
    const element = document.getElementById('products-app');
    if (element) {
        mountProducts(element);
    }
}

export { mountProducts };
