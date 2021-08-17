const assertEqual = (actual, expected) => {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2); 

assertEqual(eqArrays([1,2,3], [1,2,3]), true); 
assertEqual(eqArrays([1,2,3], [1,'a',3]), false); 
assertEqual(eqArrays([1,2,3,4], [1,2,3]), true); 
assertEqual(eqArrays([1,2,[3,4],4], [1,2,[3,4],4]), true); 

