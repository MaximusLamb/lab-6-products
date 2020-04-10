// import renderInstruments from './renderInstruments.js';
import instruments from './brokenInstruments.js';
import findById, { toUSD } from './utils.js';
import renderLineItem, { calcOrderTotal } from './render-line-item.js';


const tbody = document.getElementById('table-index');
const orderTotal = document.getElementById('order-total-amount');
// const placeOrderButton = document.getElementById('place-order-button');

let jsonCart = localStorage.getItem('CARTAREA');
// create a second shopping cart as a vessel from localStorage
let shoppingCart;

if (jsonCart) {
    // shopping cart is equal to the parsed(unstringified) version of jsoncart
    shoppingCart = JSON.parse(jsonCart);
} else {
    // if its not equal(or its empty) start an array
    shoppingCart = [];
}

for (let i = 0; i < shoppingCart.length; i++) {
    // set cartItem equal to each cart index that is passed
    const cartItem = shoppingCart[i];
//     //set cartItemId equal to the cartItem.id pulled from the object cartItem
    const cartItemId = cartItem.id;
//    // set instrument equal to the findById function that matches the instruments with the cartItemId
    const instrument = findById(instruments, cartItemId);
   // set tablerow = to the renderlineitem function which matches the new cartItem value to the instrument
    const tableRow = renderLineItem(cartItem, instrument);
    // prints everything into the tbody which is created in the tablerow by rending the items
    tbody.appendChild(tableRow);
}

const finalTotal = calcOrderTotal(shoppingCart, instruments);

orderTotal.textContent = toUSD(finalTotal);

// if (shoppingCart === 0) {

//     placeOrderButton.disabled = true;
// }

// placeOrderButton.addEventListener('click', () => {

    

//     alert(JSON.stringify(shoppingCart, true, 2)); 

// });