// Create a function that takes a string and returns a string in which each character is repeated once. 
// (score 2) 
// Examples :  
// ● doubleChar("String") ➞ "SSttrriinngg" 
// ● doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!" 
// ● doubleChar("1234!_ ") ➞ "11223344!!__  " 




function doubleChar(word){
let str = word
let result ="";
for(let i=0;i<str.length;i++){
   result += str[i].repeat(2);
}

  return result;
}

console.log( doubleChar("String") );

console.log(doubleChar("Hello World!") );

console.log(doubleChar("1234!_ "));
