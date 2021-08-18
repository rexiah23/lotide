const eqArrays = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else if (!eqArrays(arr1, arr2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (!results[letter]) {
      results[letter] = [i];
    } else {
      results[letter].push(i);
    }
  }
  return results;
};

assertArraysEqual(letterPositions('hello'), {h: [0], e: [1], l:[2,3], o: [4]});
assertArraysEqual(letterPositions('lighthouse'), {l: [0], i: [1], g: [2], h: [3, 5], t: [4], o: [6], u: [7], s: [8], e: [9]});
assertArraysEqual(letterPositions('rara'), {r: [0, 2], a: [1, 3]});