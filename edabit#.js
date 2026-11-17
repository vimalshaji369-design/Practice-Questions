
// # **Draw a Progress Bar**

// Show how far a task has progressed using a ten-slot text bar. Create `progressBar` to return a string containing filled slots (`"#"`) followed by empty slots (`"-"`). Each filled slot represents a complete 10% of `percent`; a partly filled slot stays empty.

// ### Examples
// ```javascript
// progressBar(40) // "####------"

// progressBar(0) // "----------"

// progressBar(100) // "##########"
// ```

// ### Notes

// `percent` is a whole number from `0` to `100`. The returned string always contains exactly ten characters, with no brackets or spaces. For example, both `40` and `49` have four filled slots.

// function progressBar(percent) {

// **// Write your code here.**

// }



// **Check**





// explain the quistion




function progressBar(percent) {
let filled = Math.floor(percent/10);
  let empty = 10 -filled;

  return "#".repeat(filled) + "-".repeat(empty);
}