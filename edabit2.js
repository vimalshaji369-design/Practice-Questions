// edabit quistion&#x20;

// Complete the three functions for bitwise AND, OR, and XOR. Each function takes two decimal 
// integers and returns its result as an ordinary decimal integer.

// ### Examples
// ```
// bitwiseAND(7, 12) ➞ 4

// bitwiseOR(7, 12) ➞ 15

// bitwiseXOR(7, 12) ➞ 11
// ```

// ### Notes

// JavaScript has a useful function: `toString(2)`, where you can see the binary representation 
// of a decimal number.




function bitwiseAND(n1, n2) {
	return n1 & n2;
}

function bitwiseOR(n1, n2) {
	return n1 | n2;
}

function bitwiseXOR(n1, n2) {
	return n1^n2;
}