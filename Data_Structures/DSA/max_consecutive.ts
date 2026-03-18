/*
Given a binary array nums, return the maximum number of consecutive 1's in the array.
Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2

*/


function findMaxConsecutiveOnes(nums: number[]): number {
    // Counter to count max
    var counter = 0;

    let i = 0;

    let max_consecutive = 0

    while(i < nums.length ){
        if(nums[i] == 1){
            counter++;
            max_consecutive = Math.max(counter, max_consecutive)
        }
        else{
            counter = 0
        }
        i++;
    }

    return max_consecutive
};

const nums = [1,1,0,1,1,1]

console.log("Nums: ", findMaxConsecutiveOnes(nums));

const nums_1 = [1,0,1,1,0,1]

console.log("Nums_1: ", findMaxConsecutiveOnes(nums_1));