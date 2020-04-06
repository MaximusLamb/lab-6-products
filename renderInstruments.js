function renderInstruments(instrument) {
    const list = document.createElement('li');

    const h2 = document.createElement('h2');
    h2.textContent = instrument.name;

    const image = document.createElement('img');
    image.src = instrument.image;

    const instrumentDescription = document.createElement('span');
    instrumentDescription.textContent = instrument.description;
    
    const instrumentCategory = document.createElement('span');
    instrumentCategory.textContent = instrument.category;

    const instrumentPrice = document.createElement('span');
    instrumentPrice.textContent = instrument.price;

    list.append(h2, image, instrumentDescription, instrumentCategory, instrumentPrice);

    return list;
};

export default renderInstruments;
