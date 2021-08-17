const eqArrays = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

const assertArrayEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else if (!eqArrays(arr1, arr2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

assertArrayEqual(eqArrays([1,2,3], [1,2,3]), true); 
assertArrayEqual(eqArrays([1,2,3], [1,'a',3]), false); 
assertArrayEqual(eqArrays([1,2,3,4], [1,2,3]), true); 
assertArrayEqual(eqArrays([1,2,[3,4],4], [1,2,[3,4],4]), true); 