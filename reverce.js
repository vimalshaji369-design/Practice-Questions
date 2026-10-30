// Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, 
// and vice versa. 
// (score 2) Examples : 
//  ● reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY" 
//  ● reverseCase("MANY THANKS") ➞ "many thanks" 
//  ● reverseCase("sPoNtAnEoUs") ➞ "SpOnTaNeOuS" 



function reverseCase(letter){
 let result =" ";
 for(let i=0;i<letter.length;i++){
   if(letter[i]===letter[i].toUpperCase()){
     result += letter[i].toLowerCase();
   }else{
     result += letter[i].toUpperCase();
   }
 }
  return result;
}

console.log(reverseCase("Happy Birthday") );

console.log(reverseCase("MANY THANKS"));

console.log(reverseCase("sPoNtAnEoUs"));