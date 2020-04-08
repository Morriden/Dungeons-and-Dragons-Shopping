import cart from '../magic-items/magic-items-data-cart.js';
import magicItems from '../magic-items/magic-items.js';
import magicItemRow from '../functions/magic-item-row.js';
import findById from '../functions/find-by-id.js';
import calcOrderTotal from '../functions/order-total.js';

const tbody = document.querySelector('tbody');
const orderTotalSpot = document.getElementById('order-total');
const purchaseButton = document.getElementById('purchase-button');
const json = localStorage.getItem('CART');
let newCart;
if (json) {
    newCart = JSON.parse(json);
} else {
    newCart = [];
}

for (let i = 0; i < newCart.length; i++) {
    const cartItem = newCart[i];
    const magicItem = findById(magicItems, cartItem.id);
    const updateTable = magicItemRow(cartItem, magicItem);

    tbody.appendChild(updateTable);
}

if (newCart.length === 0) {
    purchaseButton.disabled = true;
} else {
    purchaseButton.addEventListener('click', () => {
        localStorage.removeItem('CART');
        alert('Youve ordered: ' + JSON.stringify(newCart, true, 2));
        window.location = '../';
    });
}

const orderTotal = calcOrderTotal(newCart, magicItems);
orderTotalSpot.textContent = orderTotal;