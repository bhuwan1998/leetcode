// binary search questions

function binarySearch(list, n) {
  var left = 0;
  var right = list.length - 1;

  while (left <= right) {
    var middle = left + Math.floor((right - left) / 2);
    if (n < list[middle]) {
      right = middle - 1;
    } else if (n > list[middle]) {
      left = middle + 1;
    } else {
      return middle;
    }
  }

  return -1;
}

// leetcode 35
// Search Insert Position
/*

Given a sorted array of distinct integers and a target value, return the index if the target found. If not, return the index where it would be if it were inserted in order 

*/

// 1 , 3 , 5, 6, and a target value
// Search the array starting at index 1
// that's just linear search at this point and in O(n)
// O(n) -> its pretty bad
// Two pointers again

// The hint is that the array is sorted
// Figure if the value is one or the other half and then narrows down the array where we need to insert it

function searchInsertPosition(nums, target) {
  left = 0;
  right = nums.length - 1; // we have two pointers now

  // we need to keep track of the middle pointer
  while (left <= right) {
    var middle = left + Math.floor((right - left) / 2);

    if (nums[middle] === target) {
      return middle;
    }

    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }

  }
  
  return left;

  // we did not find the target
}

var array = [1, 2, 3, 4, 10, 11, 15, 18];

const searchVal = 12;

// console.log(binarySearch(array, searchVal));

console.log(searchInsertPosition(array, searchVal))


