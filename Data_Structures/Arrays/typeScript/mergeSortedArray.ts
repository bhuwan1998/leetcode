// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements 
// in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored
//  inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first
//  m elements denote the elements that should be merged, and the last n elements are set to 0 
// and should be ignored. nums2 has a length of n.



// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.


function mergeSortedArrays(nums1: number[], m: number, nums2: number[], n: number): number[] {
    //given two sorted arrays in a non-decreasing order and their lengths merge them in order 

    let p1 = m-1; 
    let p2 = n - 1; 

    let p = m + n -1 ;// final array 

    while(p1 >= 0 && p2 >= 0){
        if(nums1[p1] > nums2[p2]){
            nums1[p] = nums1[p1];
            console.log("Nums 1: ", nums1[p])
            p1--;
        }
        else{
            nums1[p] = nums2[p2];
            console.log("Nums 2: ", nums1[p]);
            p2--;
        }
        p--;
    }

    // This handles the case where nums2 has remaining elements
    while(p2 >= 0){
        nums1[p] = nums2[p2]; 
        p2--; 
        p--;
    }
    
    // Note: We don't need a similar loop for nums1 because if nums1 has remaining elements,
    // they're already in their correct position at the beginning of the array

    return nums1;
}


const nums1 = [0]  // Length m+n with space for nums2
const m = 5                       // First 5 elements are meaningful: [1,1,2,9,10]
const nums2 = [1,2,5,6]
const n = 3


console.log("Merge Sorted Array : ", mergeSortedArrays(nums1, m, nums2, n ));


