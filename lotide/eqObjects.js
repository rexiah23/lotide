const assertEqual = (actual, expected) => {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

// const eqObjects = function(object1, object2) {

//   const obj1Keys = Object.keys(object1);
//   const obj2Keys = Object.keys(object2);

//   if (obj1Keys.length !== obj2Keys.length) return false;
  
//   for (const key of obj1Keys) {
//     if (JSON.stringify(object1[key]) !== JSON.stringify(object2[key])) return false;
//   }
  
//   return true;
// };

// //Primitive type test
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);

// //Object type test
// const cd = { c: "1", d: ["2", 3, 4] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), false);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), true);

const eqObjects1 = function(object1, object2) {

  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  let equal = true; 
  if (obj1Keys.length !== obj2Keys.length) return false;
  
  for (const key of obj1Keys) {
    const obj1val = object1[key]; 
    const obj2val = object2[key];
    if (!equal) return false; 
    if (typeof obj1val === 'object') {
      equal = eqObjects1(obj1val, obj2val);
      continue; 
    } 
    if((obj1val) !== (obj2val)) {
      return false;
      }
    }

  return equal;
  }
  


//Nested test
assertEqual(eqObjects1({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);

assertEqual(eqObjects1({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects1({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); 
assertEqual(eqObjects1({ a: { y: 0, z: 1 }, b: {d: 3}}, { a: {y: 0, z: 2}, b: {d: 3}}), false);
assertEqual(eqObjects1({ a: { y: 0, z: 1 }, b: {d: 3}}, { a: {y: 0, z: 1}, b: {d: 5}}), false);
assertEqual(eqObjects1({ a: { z: {d: 1} }, b: 2 }, { a: { z: {d: 1} }, b: 2 }), true);