const assert = require('chai').assert;
const head = require("../head");

describe("#head", () => {
  it("should return 1 for [1,2,3]", () => {
    assert.strictEqual(head([1,2,3]), 1);
  })

  it("should return '5' for ['5']", () => {
    assert.strictEqual(head(['5',4,3]), '5');
  })

  it("should return undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  })

  it("should return 'hi' for ['hi', 3, {}]", () => {
    assert.strictEqual(head(["hi", 3, {}]), "hi");
  })
});

