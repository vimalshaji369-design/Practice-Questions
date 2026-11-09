// Write two functions: toArray(), which converts a number to an array of its digits. 
// toNumber(), which converts an array of digits back to its number.
// (Score 3)
//   Examples:  
// ○ toArray(235) ➞ [2, 3, 5] 
// ○ toNumber([2, 3, 5]) ➞ 235  
// ○ toArray(0) ➞ [0]  
// ○ toNumber([0]) ➞ 0 




function toArray(num){
  let str =num.toString().split("");
  let result = str.map(Number);
  return result;
}

  function toNumber(nub){
    let arr =nub.join("");
    let rslt =Number(arr);
    return rslt;
  
}

console.log(toArray(235));

console.log(toNumber([2, 3, 5]));

console.log(toArray(0));

console.log(toNumber([0]));