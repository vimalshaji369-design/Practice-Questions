//  A function takes an array of strings (as sentences) and returns the maximum number of words
// that appear in a single sentence. (Score 3)  
// Examples:  
// ● maxWords(["Welcome To Bridgeon", "Hello World", "Code Your Future With Bridgeon"]) ➞ 5  
// ● maxWords(["please wait", "continue to fight", "continue to win"]) ➞ 3  
// ● maxWords(["hello world"]) ➞ 2  
 
 
 
 function maxWords(word){
 let total = 0;
  for(i=0;i<word.length;i++){
     let str =word[i].split(" ");
    
    if(str.length>total){
      
      total =str.length;
    }
  }
  
  return total;
}
console.log(maxWords(["Welcome To Bridgeon", "Hello World", "Code Your Future With Bridgeon"]));

console.log(maxWords(["please wait", "continue to fight", "continue to win"]));

console.log(maxWords(["hello world"]));