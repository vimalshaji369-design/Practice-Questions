// Create a function which accepts an amount and returns 
// "Discount applicable" if the shopping amount is between 500 and 5000 (inclusive), 
// otherwise return "No discount". (Score: 2) 

// Examples  ● Input: 1200 → Output: "Discount applicable" ● Input: 300 → Output: "No discount" ● Input: 500 → Output: "Discount applicable" 

function discount(amount){
    if(amount >= 500 && amount<= 5000){
        console.log("Discount Applicable")
    }else{
        console.log("No Discount")
    }
}
discount(300)
discount(400)