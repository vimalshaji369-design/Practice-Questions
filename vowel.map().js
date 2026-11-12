// Create a function that takes a string and returns dashes on the left and right side of every 
// vowel (a e i o u). (score 3) 
// Examples :  
// ● dashed("Edabit") ➞ "-E-d-a-b-i-t" 
// ● dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m" 
// ● dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!" 


function dashed(string){

  
  let result =string.split("");

 result = result.map((str)=>{

    if("AEIOUaeiou".includes(str)){
        return  "-" + str +"-";
    }else{
      return str;
    }
}) 

  return result.join("");
}


 console.log(dashed("Edabit"));

//
console.log(dashed("Fight for your right to party!"));


 console.log(dashed("Carpe Diem"));

