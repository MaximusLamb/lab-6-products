import cart from './cart.js';
import instruments from './brokenInstruments.js';
import findById, { toUSD } from './utils.js';
import renderLineItem, { calcOrderTotal } from './render-line-item.js';

const tbody = document.getElementById('table-index');
const orderTotal = document.getElementById('order-total-amount');

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const cartItemId = cartItem.id;
   
    const instrument = findById(instruments, cartItemId);
   
    const tableRow = renderLineItem(cartItem, instrument);

    tbody.appendChild(tableRow);
}

const finalTotal = calcOrderTotal(cart, instruments);

orderTotal.textContent = toUSD(finalTotal);