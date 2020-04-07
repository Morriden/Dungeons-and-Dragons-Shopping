export default function magicItemTableDetails(cart, magicItem) {
    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const totalTd = document.createElement('td');

    nameTd.textContent = magicItem.name;
    quantityTd.textContent = cart.quantity;
    priceTd.textContent = magicItem.price;
    
    totalTd.textContent = (magicItem.price * cart.quantity);

    tr.appendChild(nameTd);
    tr.appendChild(quantityTd);
    tr.appendChild(priceTd);
    tr.appendChild(totalTd);

    return tr;
}