

export default function renderLineItem(cartItem, instruments, instrumentIdIndex) {
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

