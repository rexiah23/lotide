const assert = require('chai').assert; 
const tail = require('../tail');

describe("tail.js", () => {
  
  it("should return [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("should return [2,3,4] for [1,2,3,4]", () => {
    assert.deepEqual(tail([1,2,3,4]), [2,3,4]);
  });
})

