const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

assertArraysEqual(eqArrays([1,2,3], [1,2,3]), true); 
assertArraysEqual(eqArrays([1,2,3], [1,'a',3]), false); 
assertArraysEqual(eqArrays([1,2,3,4], [1,2,3]), false); 
assertArraysEqual(eqArrays([1,2,[3,4],4], [1,2,[3,4],4]), true); 