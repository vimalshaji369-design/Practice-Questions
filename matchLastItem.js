// Create a function that takes an array of items and checks if the last item matches the rest 
// of the array concatenated together. (score 3) 

// Examples :  

// ● matchLastItem(["rsq", "6hi", "g", "rsq6hig"]) ➞ true 

// ● matchLastItem([1, 1, 1, "11"]) ➞ false 

// ● matchLastItem([8, "thunder", true, "8thundertrue"]) ➞ true


function matchLastItem(items){
  let word = items[items.length-1];

  if(items.slice(0,-1).join("")===String(word)){
    return true
  }else{
    return false;
  }
}

console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]));

console.log(matchLastItem([1, 1, 1, "11"]));

console.log(matchLastItem([8, "thunder", true, "8thundertrue"]));