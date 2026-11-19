// Keep the Newer Update
// Two updates are written as [timestamp, value]. A larger timestamp means a newer update. Create newerValue to return the newer update's value, not its timestamp. If the timestamps match, return the first update's value.

// Examples
// newerValue([10,"ready"], [12,"busy"]) // "busy"

// newerValue([20,"online"], [15,"offline"]) // "online"

// newerValue([5,"first"], [5,"second"]) // "first"
// Notes
// Each timestamp is an integer from 0 to 1000. Each value is a string of up to 20 characters
// . The updates may arrive in either order. An empty string is a valid value.

// Selection deleted


function newerValue(first, second) {
  return first[0]>=second[0]?first[1]:second[1];
 
}

