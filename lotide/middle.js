const eqArrays = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else if (!eqArrays(arr1, arr2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = arr => {

  const midArr = [];
  const midIndex = Math.floor(arr.length / 2);

  if (arr.length <= 2) {
    return midArr;
  }

  if (arr.length % 2 !== 0) {
    midArr.push(arr[midIndex]);
  } else {
    midArr.push(arr[midIndex - 1]);
    midArr.push(arr[midIndex]);
  }

  
  return midArr;
  
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);