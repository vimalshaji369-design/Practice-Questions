// Create a function that takes a string as an argument and converts the first character of 
// each word to uppercase. Return the newly formatted string. ( score 2 )
//  Examples :  
//  ● makeTitle("This is a title") ➞ "This Is A Title" 
//  ● makeTitle("capitalize every word") ➞ "Capitalize Every Word" 
//  ● makeTitle("I Like Pizza") ➞ "I Like Pizza" 
//  ● makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA" 


// function potatoes(count){
  
//   total =0;
  
//   for(let i=0;i<count.length;i++){
//     if(count.slice(i,i+6)==="potato"){
//       total ++;
//       i += total;
//     }
    
//   }
//   return total;
// }

// console.log(potatoes("potato"));

// console.log(potatoes("potatopotato") );

// console.log(potatoes("potatoapple"));



// function bomb(check){


//   for(i=0;i<check.length;i++){
//     if(check.includes("bomb")){
//       return "Duck!!!";
//     }else{
//       return "There is no bomb, relax." ;
//     }
//   }
  
// }


// console.log(bomb("There is a bomb."));

// console.log(bomb("Hey, did you think there is a bomb?"));

// console.log(bomb("This goes boom!!!") );



// function sumDigits(str){

//  let sum =0;

//   for(let i=0;i<str.length;i++){
//      let digit = Number(str[i]);
    
//   if(!Number.isNaN(digit)){
//      sum += digit;

//   }
  
//   }
  

  
//   return sum;
// }

// console.log(sumDigits("a1b2c3"));

// console.log(sumDigits("123ab7c"));

// console.log(sumDigits("abc"));





// function findHelp(word){

 
//     if(word.toLowerCase().includes("help")){
//       return  "Hang on, help is coming!" ;
//     }else{
//       return  "All good, no help needed.";
//     }

// }

// console.log( findHelp("Can someone HELP me?"));

// console.log(findHelp("Everything is fine here.") );

// console.log(findHelp("He yelled for help!"));




// function reverseCase(letter){
//  let result =" ";
//  for(let i=0;i<letter.length;i++){
//    if(letter[i]===letter[i].toUpperCase()){
//      result += letter[i].toLowerCase();
//    }else{
//      result += letter[i].toUpperCase();
//    }
//  }
//   return result;
// }

// console.log(reverseCase("Happy Birthday") );

// console.log(reverseCase("MANY THANKS"));

// console.log(reverseCase("sPoNtAnEoUs"));



// function calcAge(age){
//  let year = 365;
//   let hour = 24;
//   return age * year * hour;
  
// }

// console.log(calcAge(65));

// console.log(calcAge(0) );

// console.log(calcAge(20) );





// function isValid(num){

//     if(num.length !== 5){
//         return "false";
//     }
//     for(let i=0;i<num.length;i++){
//         if(num[i]<"0" || num[i]>"9"){
//             return "false";
//         }
//     }
//     return "true";
// }

// console.log(isValid("59001") );

// console.log(isValid("853a7"));

// console.log(isValid("732 32") );

// console.log(isValid("393939"));








function makeTitle(str){
 let word = str.split(" ");
    
    for(let i=0;i<word.length;i++){
        word[i]=word[i][0].toUpperCase() + word[i].slice(1);
    }
    return word.join(" ")

}

console.log(makeTitle("This is a title") );

console.log(makeTitle("capitalize every word"));

console.log(makeTitle("I Like Pizza") );

console.log(makeTitle("PIZZA PIZZA PIZZA"));

