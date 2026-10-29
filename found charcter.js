//  Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.( CASE SENSITIVE )(score 2) 
//  Examples :  
//  ● charCount("a", "edabit") ➞ 1 
//  ● charCount("c", "Chamber of secrets") ➞ 1 
//  ● charCount("b", "big fat bubble") ➞ 4 




function charCount(letter, str){
count =0;
for(let i=0;i<str.length;i++){
   if (str[i].toLowerCase() === letter.toLowerCase()){
    count++;
  }
}
  return count;
}

console.log(charCount("a", "edabit"));

console.log(charCount("c", "Chamber of secrets"));

console.log(charCount("b", "big fat bubble"));