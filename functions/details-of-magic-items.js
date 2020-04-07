function magicItemDetails(magicItem) {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const img = document.createElement('img');
    const description = document.createElement('p');
    const category = document.createElement('p');
    const price = document.createElement('p');
    //const button = document.createElement('button');

    h3.textContent = magicItem.name;
    img.src = '../picture-assets/' + magicItem.image;
    description.textContent = 'Description: ' + magicItem.description;
    category.textContent = 'Category: ' + magicItem.category;
    price.textContent = 'Price: ' + magicItem.price;
    //button.textContent = 'Purchase!';

    li.appendChild(h3);
    li.appendChild(img);
    li.appendChild(description);
    li.appendChild(category);
    li.appendChild(price);
    //li.appendChild(button);

    return li;

}

export default magicItemDetails;