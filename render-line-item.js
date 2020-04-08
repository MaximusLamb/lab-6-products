import findById, { calcLineItem } from './utils.js';
import cart from './cart.js';
import brokenInstruments from './brokenInstruments.js';
let orderTotalPrice = document.getElementById('order-total-amount');

export default function renderLineItem(cartItem, instruments) {
    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    nameTd.textContent = instruments.name;

    const quantityTd = document.createElement('td');
    quantityTd.textContent = cartItem.quantity;

    const priceTd = document.createElement('td');
    priceTd.textContent = instruments.price;

    const totalTd = document.createElement('td');
    totalTd.textContent = cartItem.quantity * instruments.price;

    tr.appendChild(nameTd);
    tr.appendChild(quantityTd);
    tr.appendChild(priceTd);
    tr.appendChild(totalTd);

    return tr;
}

export function calcOrderTotal(cartItem, brokenInstruments) {
    
    let orderTotal = 0;

    for (let i = 0; i < cartItem.length; i++) {
        const lineItem = cartItem[i];
        const instrumentId = findById(brokenInstruments, lineItem.id);
        const lineTotal = calcLineItem(lineItem.quantity, instrumentId.price);
        orderTotal += lineTotal;
    
        return orderTotal;
    
    }

}

// const total = calcOrderTotal(cart, brokenInstruments);
// orderTotalPrice.textContent = total;