// Write a function that capitalizes all the words in a sentence that end with a particular letter.
// (score 3). 
// Examples :  
// ● capitalizeEnd("come home and bake cake", "e") ➞ "COME HOME and bake CAKE" 
// ● capitalizeEnd("make some noise", "e") ➞ "make some NOISE" 
// ● capitalizeEnd("bring your umbrella", "a") ➞ "bring your umbrellA" 



function capitalizeEnd(str,letter){

let words = str.split(" ");
let result = [];

  for(let i=0;i<words.length;i++){
    if(words[i].endsWith(letter)){
      result.push(words[i].toUpperCase());
    }else{
      result.push(words[i]);
    }
  }
  return result.join(" ");
}

console.log(capitalizeEnd("come home and bake cake", "e") );

console.log(capitalizeEnd("make some noise", "e") );

console.log(capitalizeEnd("bring your umbrella", "a") );