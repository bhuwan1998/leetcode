// 739. Daily Temperatures
// Given an array of integers temperatures represents the daily temperatures,
// return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.
// If there is no future day for which this is possible, keep answer[i] == 0 instead.

// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]

/**
 * Thought process as of now is get the differences between consecutive array values and check for positive values
 * Then keep a counter of the number of days before temperature increases.
 */

// ________________________________________________________________________________________________________________________

// This Approach is n^2 which is timing out at the moment for the last test case and overall it is not idead for large scale
// solutions.

// var dailytemperatures = function (temperatures) {

//   let ans = [];

//   for (var i = 0; i < temperatures.length; i++) {
//     let tempCounter = 1;
//     for (var j = i + 1; j < temperatures.length; j++) {
//       if (temperatures[j] > temperatures[i]) { // if the temperature increases then we  just have the counter as 1
//         break;
//       } else if(temperatures[j] <= temperatures[i] & j === temperatures.length-1) { // if the temperature is less than previous day and we have reached the end of the array
//         // then we can conclude there are no more days when temperature increases
//         tempCounter = 0;
//         break;
//       }
//       else {
//         // keep increasing the counter until we reach the the day when temperature increases and we come out of the for loop at one of the above if statements
//         tempCounter++;
//       }
//     }
//     ans.push(tempCounter);
//   }
//   ans[ans.length-1] = 0;
//   return ans;

// };

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var dailytemperatures = function (temperatures) {
  const n = temperatures.length;
  const ans = new Array(n).fill(0); // create the final array 
  const stack = []; // stack to keep track of index and temperatures 

  for (let i = 0; i < n; i++) {
    while (
      stack.length > 0 && // while stack exists and current iteration temp is greater than top of the stack 
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const idx = stack.pop(); // pop the top of the stack and push the difference in indices to the corresponding index of the item on top of the stack 
      ans[idx] = i - idx; // calculate the number of days by subtracting the top of the stack index with current iteration of temperatures for loop
    }
    stack.push(i); // push the current i to the top of the stack for comparison
  } // this is a classic monotonic decreasing stack example 

  return ans;
};

let temps = [30, 40, 90];
let temp2 = [73, 74, 75, 71, 69, 72, 76, 73];

console.log(dailytemperatures(temps));
