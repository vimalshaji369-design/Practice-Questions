// Create a function that extracts the values from the object properties and converts them into a string.
// (Score 2).
//  Examples :  
//  ● { 1: "We", 2: "are", 3: "bridgeon" } ➞ "We are bridgeon" 
//  ● { 1: "I", 2: "am", 3: "innocent" } ➞ "I am innocent" 
//  ● { 1: "Code", 2: "your", 3: "future" } ➞ "Code your future” 




function objectCount(str){
  return Object.values(str).join(" ")
  
}

console.log(objectCount({ 1: "We", 2: "are", 3: "bridgeon" }));
console.log(objectCount({ 1: "I", 2: "am", 3: "innocent" } ))
console.log(objectCount({ 1: "Code", 2: "your", 3: "future" } ))
