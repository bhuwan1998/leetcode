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
  let right = height.length - 1;
  let result = 0;
  let maxLeft = height[left];
  let maxRight = height[right];

  while (left < right) {
    if (maxLeft < maxRight) {
      // Calculate the trapped water
      left+= 1
      maxLeft = Math.max(maxLeft, height[left]);
      result += Math.max(0,maxLeft - height[left]);
    } else {
      // Update the maximum height encountered so far
      right -= 1
      maxRight = Math.max(maxRight, height[right]);
      result += Math.max(0, maxRight - height[right]);
    }
  }

  return result;
};

height = [4, 2, 0, 3, 2, 5];

console.log(trap(height));  // Output should be 9


