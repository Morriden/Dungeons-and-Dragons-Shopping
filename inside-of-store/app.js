import magicItems from '../magic-items/magic-items.js';
import magicItemDetails from '../functions/details-of-magic-items.js';

const magicItemContainer = document.getElementById('magic-items');

//forEach(magicItemDetails(magicItems) {})

for (let i = 0; i < magicItems.length; i++) {
    const magicItem = magicItems[i];
    const magicItemDetail = magicItemDetails(magicItem);

    magicItemContainer.appendChild(magicItemDetail);
}