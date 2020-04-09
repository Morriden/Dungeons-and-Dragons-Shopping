import findById from './find-by-id.js';

function magicItemDetails(magicItem) {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const img = document.createElement('img');
    const description = document.createElement('p');
    const category = document.createElement('p');
    const price = document.createElement('p');
    const button = document.createElement('button');

    h3.textContent = magicItem.name;
    img.src = '../picture-assets/' + magicItem.image;
    description.textContent = 'Description: ' + magicItem.description;
    category.textContent = 'Category: ' + magicItem.category;
    price.textContent = 'Price: ' + magicItem.price;
    button.textContent = 'Add to purchase!';
    button.value = magicItem.id;
    button.addEventListener('click', () => {

        let json = localStorage.getItem('CART');
        let cart;
        if (json) {
            cart = JSON.parse(json);
        } else {
            cart = [];
        }

        let selectedMagicItem = findById(cart, magicItem.id);

        if (!selectedMagicItem) {
            selectedMagicItem = {
                id: magicItem.id,
                quantity: 1
            };
            cart.push(selectedMagicItem);
        } else {
            selectedMagicItem.quantity++;
        }

        json = JSON.stringify(cart);
        localStorage.setItem('CART', json);

    });

    li.appendChild(h3);
    li.appendChild(img);
    li.appendChild(description);
    li.appendChild(category);
    li.appendChild(price);
    li.appendChild(button);

    return li;

}

export default magicItemDetails;