/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number[]}
 */

/*
You are given a sorted integer array arr containing 1 and prime numbers, where all 
the integers of arr are unique. You are alos given an integer k. 

For every i and j where 0 <= i < j < arr.length, we consider the fraction arr[i]/ arr[j]

Return the kth smallest fraction considered. Return your answer as an array of integers of size 2, where 
answer[0] == arr[i] and answer[1] == arr[j]



*/

var kthSmallestPrimeFraction = function (arr, k) {
  
};

/* brute force solution */

/* Doubt */ 
/* 

Since the array is sorted, we notice that if arr[i] / arr[j] is smaller 
than the given fraction, then all subsequent fractions formed by arr[i] / arr[j]
where k > j will also be smaller than the given fraction. 



arr = [1, 2, 3, 4, 5]
k = 3 

1/2 1/3 1/4 1/5 
2/3 1/2 2/5
3/4 3/5 
4/5 

1/2, 1/3, 1/4, 1/5, 2/3, 
 

*/

// example
var arr = [1, 2, 3, 5];
const k = 3;

console.log(kthSmallestPrimeFraction(arr, k));
