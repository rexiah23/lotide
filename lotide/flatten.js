const eqArrays = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else if (!eqArrays(arr1, arr2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const flatten = (arr) => {
  
  const flattenedArr = [];

  for (let currItem of arr) {
    Array.isArray(currItem) ? flattenedArr.push(...flatten(currItem)) : flattenedArr.push(currItem);
  }
  console.log(flattenedArr);
  return flattenedArr;
};


console.log(assertArraysEqual(flatten([1,2,[3,4]]), [1,2,3,4]));
console.log(assertArraysEqual(flatten([[1,[2,3,[4]]], 5]), [1,2,3,4,5]));

