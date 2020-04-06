// IMPORT MODULES under test here:
// import example from '../src/example.js';

import magicItemDetails from '../functions/details-of-magic-items.js';

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