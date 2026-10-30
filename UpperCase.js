// Create a function that takes a string as an argument and converts the first character of 
// each word to uppercase. Return the newly formatted string. ( score 2 )
//  Examples :  
//  ● makeTitle("This is a title") ➞ "This Is A Title" 
//  ● makeTitle("capitalize every word") ➞ "Capitalize Every Word" 
//  ● makeTitle("I Like Pizza") ➞ "I Like Pizza" 
//  ● makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA" 



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

