// Two Sum Array Problem

// Given an array of integer values, provide the indices of two numbers that add up to the target.

function twoSum(nums: number[], target: number): number[]  {
    // Create a HashMap
    // Key: nums[index], Value: index
    let hashMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;

        // Find the complement in the hashmap - if found, return the indices
        if (hashMap.has(complement)) {
            return [hashMap.get(complement)!, i];
        } else {
            // Add the current number and its index to the hashmap
            hashMap.set(num, i);
        }
    }

    // Return undefined if no solution is found
    throw new Error("No Solution Found")
}

const nums = [1, 2, 3, 4];
const target = 8;

console.log(twoSum(nums, target));