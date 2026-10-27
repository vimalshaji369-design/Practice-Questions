// Create a function that takes a string and returns a new string with all vowels removed. 
// (score 3) Examples 
// ● removeVowels("I have never seen a thin person drinking Diet Coke.") ➞ " hv nvr sn  thn prsn drnkng Dt Ck.” 
// ● removeVowels("We're gonna build a wall!") ➞ "W'r gnn bld  wll!" 
// ● removeVowels("Happy Thanksgiving to all--even the haters and losers!") ➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!" 





function removeVowels(vowel){
let letters ="";
  for(let i=0;i<vowel.length;i++){
    if(!"aeiouAEIOU".includes(vowel[i])){
      letters += vowel[i];
    }
  }
return letters;

  
}
console.log(removeVowels("I have never seen a thin person drinking Diet Coke.") );

console.log( removeVowels("We're gonna build a wall!") );

console.log( removeVowels("Happy Thanksgiving to all--even the haters and losers!") );