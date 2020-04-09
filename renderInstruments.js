import findById from './utils.js';
// import shoppingCart from './shoppingCart.js';


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
    button.textContent = ('ADD ' + '$' + instrument.price);
    button.value = instrument.id;
    button.addEventListener('click', () => {
        
        // create a cart so that json can store string items
        let jsonCart = localStorage.getItem('CARTAREA');
        // create a second shopping cart as a vessel from localStorage
        let shoppingCart;

        // if jsonCart (which is localstoragre) is empty, create an empty array
        if (jsonCart) {
            // shopping cart is equal to the parsed(unstringified) version of jsoncart
            shoppingCart = JSON.parse(jsonCart);
        } else {
            // if its not equal(or its empty) start an array
            shoppingCart = [];
        }
            // itemchoice is equal to the findbyid function which takes in the shopping cart amount and matches it with the id of instrument
        let itemChoice = findById(shoppingCart, instrument.id);
        // if item chosen doesnt exist create an id and add 1 quantity to it
        if (!itemChoice) {
            itemChoice = {
                id: instrument.id,
                quantity: 1
            };
                // push whatever i choose to shopping cart
            shoppingCart.push(itemChoice); 
            // if its already there just add 1 more
        } 
        else {
            itemChoice.quantity++;
        }
            // stringify the shopping cart and make it the new json cart amount
        jsonCart = JSON.stringify(shoppingCart);
        // set local storage and add jsonstring to the cartarea
        localStorage.setItem('CARTAREA', jsonCart);

        alert('1 ' + instrument.name + ' added to cart!');
    }

    );

    list.append(h2, image, instrumentDescription, instrumentCategory, button);



    return list;
}

export default renderInstruments;
