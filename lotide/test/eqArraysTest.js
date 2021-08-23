const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1,2,3], [1,2,3]), true); 
assertEqual(eqArrays([1,2,3], [1,'a',3]), false); 
assertEqual(eqArrays([1,2,3,4], [1,2,3]), false); 
assertEqual(eqArrays([1,2,[3,4],4], [1,2,[3,4],4]), true); 