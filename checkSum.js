// Create a function that takes an array of numbers and checks if the last element is equal to 
// the sum of all the previous elements.

// (score 3) 
// Examples :  

// ● checkSum([2, 3, 5]) ➞ true    

// ● checkSum([10, 20, 15]) ➞ false   

// ● checkSum([1, 2, 3, 6]) ➞ true 


function checkSum(arr) {
    let lastElement = arr[arr.length - 1];

    let sum = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        sum += arr[i];
    }

    return sum === lastElement;
}

console.log(checkSum([2, 3, 5]));     
console.log(checkSum([10, 20, 15]));   
console.log(checkSum([1, 2, 3, 6]));   