const eqArrays = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else if (!eqArrays(arr1, arr2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const map = (arr, callback) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    newArr.push(callback(item, i));
  }

  return newArr; 
}

const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't' ]); 
assertArraysEqual(map(words, word => word[1]), ['r', 'o', 'o', 'a', 'o' ]); 
assertArraysEqual(map(words, word => word), ['ground', 'control', 'to', 'major', 'tom' ]); 