// Write a function that reverses all the words in a sentence that start with a particular letter.
// (score 3) 
//  Examples :  
//  ● specialReverse("word searches are super fun", "s") ➞ "word sehcraes are repus fun"  
//  ● specialReverse("first man to walk on the moon", "m") ➞ "first nam to walk on the noom"  
//  ● specialReverse("peter piper picked pickled peppers", "p") ➞ "retep repip dekcip delkcip sreppep" 



function specialReverse(str,letter){
  let word = str.split(" ");
let result = []
  for(let i=0;i<word.length;i++){
    if(word[i].includes(letter)){
      result.push(word[i].split("").reverse().join(""));
    }else{
      result.push(word[i]);
    }
  }
  return result.join(" ");
}


console.log(specialReverse("word searches are super fun", "s"));

console.log(specialReverse("first man to walk on the moon", "m"));

console.log(specialReverse("peter piper picked pickled peppers", "p"));