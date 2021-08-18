const assertEqual = (actual, expected) => {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = (string) => {
  const count = {}; 

  for (const letter of string) {
    if (!count[letter]) {
      count[letter] = 1; 
    } else {
      count[letter] ++; 
    }
  }
  return count;
}

const countObj = countLetters("LHL");
assertEqual(countObj["L"], 2); 
assertEqual(countObj["H"], 1); 