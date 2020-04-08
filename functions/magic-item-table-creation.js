import cart from '../magic-items/magic-items-data-cart.js';
import magicItems from '../magic-items/magic-items.js';
import magicItemRow from '../functions/magic-item-row.js';
import findById from '../functions/find-by-id.js';

const tbody = document.createElement('tbody');

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const magicItem = findById(magicItems, cartItem.id);
    const updateTable = magicItemRow(cartItem, magicItem);

    tbody.appendChild(updateTable);
}