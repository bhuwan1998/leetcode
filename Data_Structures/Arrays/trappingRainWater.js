/* 
* @param {number [] } 
  @return {number}


*/


/*

Given n non-negative integers representing an elevation map where the width of
each bar is 1, compute how much water it is able to trap after raining.

For example 
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array 
[0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are
being trapped. 

[0,1,0,2,1,0,1,3,2,1,2] 
  


*/

var trap = function(height) {
  let left = 0;
  let right = 1;
  let result = 0;
  let maxLeft = 0;

  while (left < right && right < height.length) {
    if (height[left] > height[right]) {
      // Calculate the trapped water
      result += Math.max(0, Math.min(maxLeft, height[left]) - height[right]);
    } else {
      // Update the maximum height encountered so far
      maxLeft = Math.max(maxLeft, height[right]);
    }
    console.log(left, right, height[left], height[right], maxLeft);
    right += 1;
    left += 1;
  }

  return result;
};

height = [0,1,0,2,1,0,1,3,2]

console.log(trap(height))


