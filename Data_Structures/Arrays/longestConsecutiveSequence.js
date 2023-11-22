/**
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

 * 
 *  
*/


var longestConsecutive = function(nums) {
    let max = 0
    let numSet = new Set(nums)

    for(const nums of numSet) {
        if(!numSet.has(nums - 1)){ // if the number in the set is the start of a sequence
            // nums - 1 should be the start of a sequence 
            let length = 0 
            while(numSet.has(nums + length)) {
                length++
            }
            max = Math.max(max, length)
        }
    }
    return max 
}


let nums = [100,4,200,1,3,2]
console.log(longestConsecutive(nums))

