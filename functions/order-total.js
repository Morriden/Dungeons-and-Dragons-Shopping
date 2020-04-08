import findById from '../functions/find-by-id.js';
import calcLineItem from '../functions/calculate-line-item.js';

export default function calcOrderTotal(cart, magicItems) {
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const cartSelection = cart[i];
        const magicItem = findById(magicItems, cartSelection.id);
        const lineTotal = calcLineItem(magicItem.price, cartSelection.quantity);
        orderTotal += lineTotal;
    }

    return orderTotal;
}