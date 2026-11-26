// Let the Preview Skip Empty Titles
// The starter returns the first limit titles. The optional skipEmpty argument is not used yet.
// Extend previewTitles so skipEmpty set to true skips empty strings before choosing the first
// limit titles. Keep the original behavior when it is false or left out. Keep the titles in th
// eir original order.

// Examples
// previewTitles(["","A","B"], 2) // ["","A"]

// previewTitles(["","A","","B","C"], 2, true) // ["A","B"]

// previewTitles([" ","","C"], 3, true) // [" ","C"]
// Notes
// There are at most 30 titles, each at most 40 characters long. Only the empty string "" is 
// skipped; a title containing spaces is not empty. limit is a whole number from 0 to 30. Return
// an array.






function previewTitles(titles, limit, skipEmpty = false) {
   if (skipEmpty) {
    titles = titles.filter(title => title !== "");
  }

  return titles.slice(0, limit);
}