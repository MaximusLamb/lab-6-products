// import cart from './cart.js';
// import instruments from './brokenInstruments.js';
// import findById, { toUSD } from './utils.js';
// import renderLineItem, { calcOrderTotal } from './render-line-item.js';

// const tbody = document.getElementById('table-index');
// const orderTotal = document.getElementById('order-total-amount');

// for (let i = 0; i < cart.length; i++) {
//     // set cartItem equal to each cart index that is passed
//     const cartItem = cart[i];
//     //set cartItemId equal to the cartItem.id pulled from the object cartItem
//     const cartItemId = cartItem.id;
//    // set instrument equal to the findById function that matches the instruments with the cartItemId
//     const instrument = findById(instruments, cartItemId);
//    // set tablerow = to the renderlineitem function which matches the new cartItem value to the instrument
//     const tableRow = renderLineItem(cartItem, instrument);
//     // prints everything into the tbody which is created in the tablerow by rending the items
//     tbody.appendChild(tableRow);
// }

// const finalTotal = calcOrderTotal(cart, instruments);

// orderTotal.textContent = toUSD(finalTotal);