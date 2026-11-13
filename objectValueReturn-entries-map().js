// Write a JavaScript function that takes an object as input and returns an array containing 
// all the values of that object. (score 2) 
// Examples :  
// ● objectValuesToArray({ a: 1, b: 2, c: 3 }) ➞ [1, 2, 3] 
// ● objectValuesToArray({ name: "Alice", age: 25, city: "London" }) ➞  ["Alice", 25, "London"] 
// ● objectValuesToArray({ x: true, y: false }) ➞ [true, false] 


function  objectValuesToArray(value){

let sort = Object.entries(value).map((keys)=>{
  return keys[1];
})
  return sort;
}
console.log(objectValuesToArray({ a: 1, b: 2, c: 3 }));

console.log(objectValuesToArray({ name: "Alice", age: 25, city: "London" }));

console.log(objectValuesToArray({ x: true, y: false }));

