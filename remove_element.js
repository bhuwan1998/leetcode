/*
Given an integer array nums and an integer val, 
remove all occurrences of val in nums in-place
.The order of elements may be changed. Then return 
the number of elements in nums which are not equal to val.
Consider the no. of elements in nums which are not equal
to val to k, to get accepted, you need to do the following 
things: 

Consider the number of elements in nums which are not qual 
to val to k, to get accepted, you need to do the following things, 
- change the array nums such that first k elements of nums contain 
the elements, which are not equal to val. The remaining elements of nums 
are not important as well as the size of nums 


Case 1 
nums = [3,2,2,3] val = 3 
output = 2, [2,2,_,_]
Your function should return k = 2, with first two 
elements of nums being 2. 
It does not matter what you leave beyong the returned k (hence they are underscores)


*/


/**
 * @param {number[]} nums 
 * @param {number} val 
 * @return {number}
 */

var removeElement = function(nums, val) {
    let indices = []; 
    let new_arr = nums.filter((element) => element != val)

    // console.log(indices);
    let i = new_arr.length - 1; 
    while(i >= 0){
        nums[i] = new_arr[i];
        --i;
    }
    return new_arr.length;

}


let nums = [1,2,2,3]
const val = 2 

console.log(removeElement(nums, val));
console.log(nums);


