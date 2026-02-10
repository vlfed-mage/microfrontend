import { faker } from '@faker-js/faker';

const cartText = `You have ${faker.number.int()} items in your cart`;

document.getElementById('dev-cart').innerHTML = cartText;