// # **Can This Meeting Fit?**

// You have one available time block and one proposed meeting. Each is written as `[start,
// end]`. Create `meetingFits` to return `true` if the whole meeting fits inside the available
//  block. Otherwise, return `false`. The meeting may start or end exactly at the block's boundary.

// ### Examples
// ```javascript
// meetingFits([9,12], [10,11]) // true

// meetingFits([9,12], [8,10]) // false

// meetingFits([9,12], [9,12]) // true
// ```

// ### Notes

// Times are whole-number hours from 0 to 24 on the same day. In both pairs, the start is 
// earlier than the end. You do not need to handle dates or other meetings.

// function meetingFits(available, meeting) {

// available\*meeting?true:false;

// return false;

// }



// **Check**

// **FAILED**

// Case 10 - Expected: true, instead got: false.

// ### What's wrong

// The expression on line 2 does not compare the meeting's start and end with the available 
// block, and its result is discarded.

// ### Why it fails

// The function then always reaches `return false`, so even a meeting fully inside the block
//  cannot produce `true`.

// ### Try next

// Use the array values to check both boundaries: the meeting must start no earlier than 
// the block and end no later than the block; return the result of that check.





function meetingFits(available, meeting) {
  return meeting[0] >= available[0] &&
         meeting[1] <= available[1];
}