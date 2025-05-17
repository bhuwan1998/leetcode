/**
 * Product of Array Except self 
 * Remove the current element from the array and return the product of the rest of the values 
 * Replace the current element with the product in place 
 */


// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.



// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

function arrayProductExceptSelf(nums: number[]): number[] {
    if (nums.length === 1) {
        return nums
    }

    const nums_length = nums.length
    const leftProductArray = new Array(nums_length);
    const rightProductArray = new Array(nums_length);
    const resultProduct = new Array(nums_length);

    let leftProduct = 1
    for (let i = 0; i < nums_length; i++) {
        leftProductArray[i] = leftProduct;
        leftProduct *= nums[i];
    }

    let rightProduct = 1
    for (let i = nums_length - 1; i >= 0; i--) {
        rightProductArray[i] = rightProduct;
        console.log("index: ", i, " : ", rightProductArray[i])
        rightProduct *= nums[i];

    }


    for (let i = 0; i < nums_length; i++) {
        resultProduct[i] = leftProductArray[i] * rightProductArray[i]
    }

    return resultProduct
}


const input_arr = [1, 2, 3, 4]

console.log(arrayProductExceptSelf(input_arr));


