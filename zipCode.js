// Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether 
// the input is a valid zip code. A valid zip code is as follows: 
// ( score 3 ) 
// ● Must only contain numbers (no non-digits allowed). 
// ● Must not contain any spaces. 
// ● Must not be greater than 5 digits in length.
//  Examples :  
//  ● isValid("59001") ➞ true 
//  ● isValid("853a7") ➞ false 
//  ● isValid("732 32") ➞ false 
//  ● isValid("393939") ➞ false 



function isValid(num){

    if(num.length !== 5){
        return "false";
    }
    for(let i=0;i<num.length;i++){
        if(num[i]<"0" || num[i]>"9"){
            return "false";
        }
    }
    return "true";
}

console.log(isValid("59001") );

console.log(isValid("853a7"));

console.log(isValid("732 32") );

console.log(isValid("393939"));
