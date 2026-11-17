 
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