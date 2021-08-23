const assert = require('chai').assert;
const middle = require('../middle');


// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);

describe("middle.js", () => {

  it("should return [] for [1,2]", () => {
    assert.deepEqual(middle([1,2]), []);
  });
  
  it("should return [2] for [1,2,3]", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });

  it("should return [2,3] for [1,2,3,4]", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
});