import cart from './cart.js';
import brokenInstruments from './brokenInstruments.js';
import findById from './utils.js';
import renderLineItem from './render-line-item.js';
const tbody = document.getElementById('table-index');

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const instruments = brokenInstruments[i];
    const instrumentIdIndex = findById(cartItem.id, instruments);

    const tableRow = renderLineItem(cartItem, instruments, instrumentIdIndex);

    tbody.appendChild(tableRow);
}

