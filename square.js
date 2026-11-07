// Create a function that squares every digit of a number.
//  ( score 2 ) 
//  Examples :  
//  ● squareDigits(9119) ➞ 811181 
//  ● squareDigits(2483) ➞ 416649 
//  ● squareDigits(3212) ➞ 9414 



function squareDigits(num){

  let sp = String(num).split("");
  
  let result ="";
  for(let i=0;i<sp.length;i++){
   
    result += Number(sp[i]) * Number(sp[i]);
  }
  return result;
}

console.log(squareDigits(9119));

console.log(squareDigits(2483));

console.log(squareDigits(3212));