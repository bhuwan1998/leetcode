/* 
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, 
representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be 
merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
  // n = length of nums2
  // m = length of num1 items that need to be merged
  // change in place to avoid extra memory of an additional temporary array 
  let last = m + n -1; 

  while (m > 0 && n > 0) {
    if (nums1[last] > nums2[n]){
      nums1[last] = nums1[m-1];
      m--;
    }
    else{
      nums1[last] = nums2[n-1]; 
      n--;
    }
    last--;
  }

  while(n > 0){
    nums1[last] = nums2[n-1];
    n, last = n -1, last - 1;

  }

  return nums1;
  
}



let arr = [1,2,3,4,4,0,0,0,0]
let arr2 = [1,2,3,6]
var m = 5 
var n = 4 
let return_arr =  merge(arr, m, arr2, n)

console.log(return_arr)