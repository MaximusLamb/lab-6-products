import cart from './cart.js';
import brokenInstruments from './brokenInstruments.js';
import findById, { toUSD } from './utils.js';
import renderLineItem, { calcOrderTotal} from './render-line-item.js';
const tbody = document.getElementById('table-index');
const orderTotal = document.getElementById('order-total-span');

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const instruments = brokenInstruments[i];
    const instrumentIdIndex = findById(cartItem.id, instruments);

    const tableRow = renderLineItem(cartItem, instruments, instrumentIdIndex);

    tbody.appendChild(tableRow);
}

const finalTotal = calcOrderTotal(cart, brokenInstruments);

orderTotal.textContent = toUSD(finalTotal);
