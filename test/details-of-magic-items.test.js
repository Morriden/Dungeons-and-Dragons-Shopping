// IMPORT MODULES under test here:
// import example from '../src/example.js';

import magicItemDetails from '../functions/details-of-magic-items.js';
import cart from '../magic-items/magic-items-data-cart.js';
import findById from '../functions/find-by-id.js';
import calcLineItem from '../functions/calculate-line-item.js';
import magicItemRow from '../functions/magic-item-row.js';
import calcOrderTotal from '../functions/order-total.js';
import magicItems from '../magic-items/magic-items.js';

const test = QUnit.test;

test('should take element and return element', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const bagOfHolding = {
        id: 'bagOfHolding',
        name: 'Bag of Holding',
        image: 'bag-of-holding.jpg',
        description: 'The bag of holding opens into a nondimensional space: its inside is larger than its outside dimensions.',
        category: 'Wonderous Item',
        price: 400
    };

    const expected = '<li><h3>Bag of Holding</h3><img src="../picture-assets/bag-of-holding.jpg"><p>Description: The bag of holding opens into a nondimensional space: its inside is larger than its outside dimensions.</p><p>Category: Wonderous Item</p><p>Price: 400</p></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const el = magicItemDetails(bagOfHolding);
    const outerHTML = el.outerHTML;
    //const outerHTML = el.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(outerHTML, expected);
});

test('takes an array and an id and returns the first item found that has an .id property that matches', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const id = 'bagOfHolding';
    const expected = 'bagOfHolding';
    //Act 
    // Call the function you're testing and set the result to a const
    const foundMagicItem = findById(cart, id);
    //const outerHTML = el.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(foundMagicItem.id, expected);
});

test('returns null', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const id = 'null';
    const expected = null;
    //Act 
    // Call the function you're testing and set the result to a const
    const foundMagicItem = findById(cart, id);
    //const outerHTML = el.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(foundMagicItem, expected);
});

test('takes quantity and price and returns total', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const quantity = 2;
    const price = 800;
    const expected = 1600;
    //Act 
    // Call the function you're testing and set the result to a const
    const total = calcLineItem(quantity, price);
    //const outerHTML = el.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(total, expected);
});

test('takes a cart line item and product and returns the html dom', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const bagOfHolding = {
        id: 'bagOfHolding',
        quantity: 2
    };
    const magicItem = {
        id: 'bagOfHolding',
        name: 'Bag of Holding',
        image: 'bag-of-holding.png',
        description: 'The bag of holding opens into a nondimensional space: its inside is larger than its outside dimensions.',
        category: 'Wonderous Item',
        price: 400
    };
    const expected = '<tr><td>Bag of Holding</td><td>2</td><td>400</td><td>800</td></tr>';

    //Act 
    // Call the function you're testing and set the result to a const
    const el = magicItemRow(bagOfHolding, magicItem);
    const outerHTML = el.outerHTML;
    //const outerHTML = el.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(outerHTML, expected);
});

test('takes quantity and price and returns total', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 10500;

    //Act 
    // Call the function you're testing and set the result to a const
    const orderTotal = calcOrderTotal(cart, magicItems);
    //const outerHTML = el.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(orderTotal, expected);
});
