// Write a function that accepts an array of strings and a  number , returning only strings 
// with a length greater than number. (score 2) Examples: 

// ● filterByLength(["hi", "hello", "world"], 3)); ➞ ["hello", "world"] 

// ● filterByLength(["cat", "dog", "elephant"], 4)); ➞ ["elephant"] 


function filterByLength(arr, num) {
    return arr.filter(str => str.length > num);
}

console.log(filterByLength(["hi", "hello", "world"], 3));


console.log(filterByLength(["cat", "dog", "elephant"], 4));
