const assert = require('chai').assert; 
const tail = require('../tail');

// assertArraysEqual(tail([1]), []);
// assertArraysEqual(tail([]), []);
// assertArraysEqual(tail([1,2,3,4]), [2,3,4]);

describe("tail.js", () => {
  
  it("should return [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
})

