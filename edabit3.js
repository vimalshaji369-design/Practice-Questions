// The starter adds the minutes of every task. Each task has a `minutes` value and a `paused` flag. The optional `includePaused` argument is not used yet. Extend `totalMinutes` so `includePaused` set to `false` leaves paused tasks out of the total. Keep counting every task when it is `true` or left out.

// ### Examples
// ```javascript
// totalMinutes([{"minutes":5,"paused":false},{"minutes":7,"paused":true}]) // 12

// totalMinutes([{"minutes":5,"paused":false},{"minutes":7,"paused":true}], false) // 5

// totalMinutes([], false) // 0
// ```

// ### Notes

// There are at most 30 tasks. Each task has a whole-number `minutes` value from 0 to 100 and a Boolean `paused` value. Return 0 for an empty array.

// function totalMinutes(tasks, includePaused = true) {

// let total = 0;

// for (const task of tasks) {

// total += task.minutes;

// }

// return total;

// }



// **Check**






function totalMinutes(tasks, includePaused = true) {

  let total = 0;

  for (const task of tasks) {

    if (includePaused || !task.paused) {
      total += task.minutes;
    }

  }

  return total;
}