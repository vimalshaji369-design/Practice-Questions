//  Create a function that accepts a string (sentence) and returns the smallest word (word with the minimum number of characters). 
//  (score 3) If there is more than one word of the same minimum number of characters, return the first word that occurs in the sentence. 
//  Examples 
//  ● smallestWord("I love programming in JavaScript.")  // ➞ "I"
//  //  ● smallestWord("The quick brown fox jumped over the lazy dog.")  // ➞ "The" 
//  // ● smallestWord("Artificial intelligence is amazing.")  // ➞ "is" 




function smallestWord(small){
  let word= small.split(" ");
  let smallest = word[0];

  for(let i=0;i<word.length;i++){
    if(word[i].length <smallest.length){
      smallest = word[i];
    }
  }
  return smallest;
}

console.log(smallestWord("I love programming in JavaScript.")  )
console.log(smallestWord("The quick brown fox jumped over the lazy dog.")  )
console.log(smallestWord("Artificial intelligence is amazing.")  )


