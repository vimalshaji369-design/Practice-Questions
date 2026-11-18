
// Write a function that accepts a string and returns an object where keys are words and 
// values are their counts. 
// (score 3) 
// Examples:
// ● wordFrequency("apple banana apple")); ➞ { apple: 2, banana: 1 } 
// ● wordFrequency("the cat and the dog")); ➞  { the: 2, cat: 1, and: 1, dog: 1 } 
// ● wordFrequency("Hello hello world")); ➞ { hello: 2, world: 1 } function wordFrequency(str){


function wordFrequency(str){
let word = str.split(" ");
  let obj ={}
  for(let i=0;i<word.length;i++){
    obj[word[i]]=(obj[word[i]] || 0)+1;
  }
  return obj;
}

console.log(wordFrequency("apple banana apple"));

console.log(wordFrequency("the cat and the dog"));

console.log(wordFrequency("Hello Hello world"));