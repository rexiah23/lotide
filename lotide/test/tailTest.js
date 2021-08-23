const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

assertArraysEqual(tail([1]), []);
assertArraysEqual(tail([]), []);
assertArraysEqual(tail([1,2,3,4]), [2,3,4]);
