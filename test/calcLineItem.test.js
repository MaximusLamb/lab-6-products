// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

import { calcLineItem } from '../utils.js';

test('calcLineItem test', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 1000;
    const result = calcLineItem(20, 50);
    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});
