// Write a JavaScript function that takes an object as input and returns an array containing 
// all the keys of that object. 
// (score 2) 
// Examples :  
// ● objectKeysToArray({ a: 1, b: 2, c: 3 }) ➞ ["a", "b", "c"] 
// ● objectKeysToArray({ name: "Alice", age: 25, city: "London" }) ➞ ["name", "age", "city"] 
// ● objectKeysToArray({ x: true, y: false }) ➞ ["x", "y"] 



function objectKeysToArray(key){
let rslt = Object.keys(key);
  sum = [];
  for(i=0;i<rslt.length;i++){
    sum.push(rslt[i]);
  }
  return sum;
}

console.log(objectKeysToArray({ a: 1, b: 2, c: 3 }));

console.log(objectKeysToArray({ name: "Alice", age: 25, city: "London" }));

console.log(objectKeysToArray({ x: true, y: false }) );


