// Create a function that takes a string and returns dashes on the left and right side of every 
// vowel (a e i o u). (score 3) 
// Examples :  
// ● dashed("Edabit") ➞ "-E-d-a-b-i-t" 
// ● dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m" 
// ● dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!" 





function dashed(str){

  let result ="";
  for(let i=0;i<str.length;i++){
    if("aeiouAEIOU".includes(str[i])){
       result += "-" +str[i]+ "-";
    }else{
      result += str[i];
    }
  }
  return result;
}

console.log(dashed("Edabit"));

console.log(dashed("Carpe Diem"));

console.log(dashed("Fight for your right to party!"));