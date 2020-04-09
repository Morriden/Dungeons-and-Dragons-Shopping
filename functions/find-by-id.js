export default function findById(cart, id) {
    let magicItem;

    for (let i = 0; i < cart.length; i++) {
        const magicItemFound = cart[i];

        if (magicItemFound.id === id) {
            magicItem = magicItemFound; 
        }
    }
    return magicItem;
}