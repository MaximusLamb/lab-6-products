function renderInstruments(instrument) {
    const list = document.createElement('ul');

    const h2 = document.createElement('h2');
    h2.textContent = instrument.name;

    const image = document.createElement('img');
    image.src = instrument.image;

    const instrumentDescription = document.createElement('span');
    instrumentDescription.textContent = instrument.description;
    
    const instrumentCategory = document.createElement('h2');
    instrumentCategory.textContent = instrument.category;

    const button = document.createElement('button');
    button.textContent = '$' + instrument.price;
    button.value = instrument.id;

    list.append(h2, image, instrumentDescription, instrumentCategory, button);



    return list;
}

export default renderInstruments;
