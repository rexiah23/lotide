const assertEqual = (actual, expected) => {
  
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const tail = (arr) => {
  return (arr.slice(1));
};

assertEqual(tail([1]), []);
assertEqual(tail([]), []);
assertEqual(tail([1,2,3,4]), [2,3,4]);
