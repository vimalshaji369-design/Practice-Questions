// Create a function that accepts a string (sentence) and returns the largest word (word with the maximum number of characters).
// (score 3) 
// If there is more than one word of the same maximum number of charecters, return the first word that occurs in the sentence. 
// Examples 
// ● largestWord("I love programming in JavaScript.")  // ➞ "programming" 
// // ● largestWord("The quick brown fox jumped over the lazy dog.")  // ➞ "jumped" 
// // ● largestWord("Artificial intelligence is amazing.")  // ➞ "intelligence" 



function largestWord(word){
let words = word.split(" ")
let largest ="";
for(let i=0;i<words.length;i++){
  if(words[i].length > largest.length){
    largest = words[i];
  }
}
return largest;
  
}
console.log(largestWord("I love programming in JavaScript.")  );
console.log(largestWord("The quick brown fox jumped over the lazy dog.") );
console.log(largestWord("Artificial intelligence is amazing.")  );