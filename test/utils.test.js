
const test = QUnit.test;

import findById from '../utils.js';
import brokenInstruments from '../brokenInstruments.js';

test('find the id function', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    // const result = calcLineItem();
    // const expected = ;
    const expected = { id: 1,
        name: 'Rusty Trumpet',
        category: 'brass',
        image: 'https://az58332.vo.msecnd.net/e88dd2e9fff747f090c792316c22131c/Images/Products62075-1200x1200-1649647.jpg',  
        value: '1',
        description: 'Sort of works. Might\'ve looked like the trumpet in the picture at one point.',
        price: 5 }; 
    //Act 
    // Call the function you're testing and set the result to a const
    const foundInstrument = findById(brokenInstruments, 1);
    //Assert
    // Make assertions about what is expected valid result
    // assert.ok(foundInstrument);
    assert.deepEqual(foundInstrument, expected);
});
