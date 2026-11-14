// A number is said to be Harshad if it's exactly divisible by the sum of its digits. Create 
// a function that determines whether a number is a Harshad or not. (score 3) 
// Examples  
// ● isHarshad(75) ➞ false // 7 + 5 = 12 // 75 is not exactly divisible by 12 
// ● isHarshad(171) ➞ true // 1 + 7 + 1 = 9 // 171 is exactly divisible by 9 
// ● isHarshad(481) ➞ true 
// ● //  4 + 8 + 1 = 13 // 481 is exactly divisible by 13 



function isHarshad(num){
  
  let str = num.toString().split("");
  let result = str.reduce((a,b)=>{
    return a + Number(b);
   
  },0);  
   
    if(num% result ===0){
      return true;
    }else{
      return false;
    }
}

console.log(isHarshad(75));

console.log(isHarshad(171));

console.log(isHarshad(481));
