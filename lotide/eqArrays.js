const assertEqual = require('./assertEqual');

const eqArrays = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2); 

module.exports = eqArrays;


 

