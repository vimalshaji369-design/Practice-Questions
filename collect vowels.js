// Write a function that takes a string as input and returns the number of vowels in the string.
//   Examples :
//    ● countVowels(“Hello World”) = 3 
//    ● countVowels(Programming is fun”) = 5 
//    ● countVowels(“Rhythm”) = 0 


function countVowels(vowels){
let count =0;

for(let i=0;i<vowels.length;i++){
  if("aeiou".includes(vowels[i])){
    count++;
  }
  
}

  return count;
}
 console.log(countVowels("Hello world")); 