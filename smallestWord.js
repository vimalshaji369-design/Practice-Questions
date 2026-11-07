// Create a function that accepts a string (sentence) and returns the smallest word 
// (word with the minimum number of characters). (score 3) If there is more than one word
//  of the same minimum number of characters, return the first word that occurs in the
//   sentence. 
//   Examples 
//   ● smallestWord("I love programming in JavaScript.")  // ➞ "I" 
//   // ● smallestWord("The quick brown fox jumped over the lazy dog.")  // ➞ "The" 
//   // ● smallestWord("Artificial intelli


function smallestWord(word){

   word = word.replace(".", "");
  let str = word.split(" ");
  let smallest = str[0];
  
  
  
  for(let i=0 ; i<str.length ; i++){
    if(str[i].length < smallest.length){
      smallest=str[i];
     
    }
   
  }
  return smallest;
}

console.log(smallestWord("I love programming in JavaScript."));

console.log(smallestWord("The quick brown fox jumped over the lazy dog."));

console.log(smallestWord("Artificial intelligence is amazing."));