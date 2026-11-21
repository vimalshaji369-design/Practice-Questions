// Write a function that accepts a string and moves all the uppercase (capital) letters to the 
// end of the string, while preserving the order of both uppercase and lowercase letters.
// (score 3). 
// Examples :  

// ● moveCapital("hElloWOrld") ➞ "hrlldoEWO" 

// ● moveCapital("JavaScript") ➞ "avaJScript" 

// ● moveCapital("PboyTHon") ➞ "yonPTH" 


function moveCapital(str) {

  let small = "";
  let capital = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      capital += str[i];
    } else {
      small += str[i];
    }
  }

  return small + capital;
}

console.log(moveCapital("hElloWOrld"));
console.log(moveCapital("JavaScript"));
console.log(moveCapital("PboyTHon"));