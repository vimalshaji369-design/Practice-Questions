//  Create a function that takes a string and returns dashes on the left and right side of every 
//  vowel (a e i o u). (score 3) 
//  Examples :  
//  ● dashed("Edabit") ➞ "-E-d-a-b-i-t" 
//  ● dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m" 
//  ● dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!" 




function dashed(string){

let result = "";
  for(str of string){
    if("aeiouAEIOU".includes(str)){
      result += "-"+str+"-";
    }else{
      result += str;
    }
  }

return result;
    
  }

console.log(dashed("Edabit"));

console.log(dashed("Carpe Diem"));

console.log(dashed("Fight for your right to party!"));

