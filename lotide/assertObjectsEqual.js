const eqObjects = function(object1, object2) {

  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);

  if (obj1Keys.length !== obj2Keys.length) return false;
  
  for (const key of obj1Keys) {
    if (JSON.stringify(object1[key]) !== JSON.stringify(object2[key])) return false;
  }
  
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

assertObjectsEqual({1:'hi'}, {1:'hi'});
assertObjectsEqual({1:{2: 'hi'}}, {1:{2: 'hi'}});