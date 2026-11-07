function smallestWord(word){

   word = word.replace(".", "");
  let str = word.split(" ");
  let smallest = str[0];
  let result = [];
  
  
  for(let i=0 ; i<str.length ; i++){
    if(str[i].length <= smallest.length){
      smallest=str[i];
      result.push(smallest);
    }
   
  }
  return result;
}

console.log(smallestWord("I love programming in JavaScript."));

console.log(smallestWord("The quick brown fox jumped over the lazy dog."));

console.log(smallestWord("Artificial intelligence is amazing."));