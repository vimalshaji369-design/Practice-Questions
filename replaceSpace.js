// Create a function that accepts a string and replaces every space in the string with a hyphen(-).
// (score 2) 
//  Examples :  
//  ● replaceSpaces("I love JS") ➞ "I-love-JS"   
//  ● replaceSpaces("Hello World") ➞ "Hello-World"   
//  ● replaceSpaces("JavaScript is fun") ➞ "JavaScript-is-fun" 



function replaceSpaces(newest){

  let result = newest.replaceAll(" ","-");
  return result;
  
}

console.log(replaceSpaces("I love JS"));

console.log(replaceSpaces("Hello World"));

console.log(replaceSpaces("JavaScript is fun"));


