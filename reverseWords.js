// Write a function that takes a sentence and reverses every word individually, while keeping 
// the word order the same. (score 2) 

// Examples :  

// ● reverseWords("I love JS")  ➞  "I evol SJ" 

// ● reverseWords("Hello World")  ➞  "olleH dlroW" 

// ● reverseWords("JavaScript is fun")  ➞  "tpircSavaJ si nuf" 





function reverseWords(str){
let word = str.split(" ");
  let result = word.map((a)=>{
    return a.split("").reverse().join("");
  })

  return result.join(" ");
  
}

console.log(reverseWords("I love JS"));

console.log(reverseWords("Hello World"));

console.log(reverseWords("JavaScript is fun"));