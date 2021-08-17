const eqArrays = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const without = (source, itemsToRemove) => {
  const copySource = [...source];
  for (let item of source) {
    for (let rmItem of itemsToRemove) {
      if (item === rmItem) {
        const index = copySource.indexOf(item);
        copySource.splice(index,1);
      }
    }
  }
  console.log(copySource);
  return copySource;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]);
assertArraysEqual(without([0, "2", "3"], [false]),[0,"2", "3"]);