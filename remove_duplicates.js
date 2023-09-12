/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 1; 
    for(let i = 1; i < nums.length; i++){
        if(nums[i] === nums[i - 1]){
            count += 1; 
        }
        if(count > 2){
            nums[i] = '_';
            count  = 0; 
        }
    }
    console.log(nums.sort());
    
};


removeDuplicates([1,1,1,2,2,3])