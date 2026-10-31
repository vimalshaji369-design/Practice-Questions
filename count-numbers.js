//  Create a function that counts the integer's number of digits. 
//  ( score 2 ) 
//  Examples 
//  ● count(318) ➞ 3 
//  ● count(-92563) ➞ 5 
//  ● count(4666) ➞ 4 



function count(num){
  let str = String(Math.abs(num));
  return str.length;
}

console.log(count(318));

console.log(count(-92563));

console.log(count(4666));