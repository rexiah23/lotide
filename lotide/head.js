const assertEqual = (actual, expected) => {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

assertEqual("Hi", "Hi");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
assertEqual(1,2);

const head = (arr) => {
  return arr[0]; 
}

assertEqual(head([0,2,4]), 0);
assertEqual(head([]), undefined);
assertEqual(head(["hi", 3, {}]), 0);

