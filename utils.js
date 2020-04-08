
export default function findById(cartItems, id) {

    for (let i = 0; i < cartItems.length; i++) {

        const item = cartItems[i];

        if (item.id === id) {
            return item;
        }  
    }   
    return null; 
}

export function calcLineItem(quantity, price) {
    const finalAmount = (quantity * price);
    return Math.round(finalAmount * 100) / 100;
}

export function toUSD(number) {
    return number.toLocaleString('en-US', { 
        style: 'currency', 
        currency: 'USD' 
    });
}