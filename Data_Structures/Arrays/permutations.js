// Create permutations 

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // have a set for the final output where there are multiple
    // permutations but none are duplicates 
    let results = []; 
    
    // check for nums with length 1 and 0 
    if(nums.length == 0) return []; 
    if(nums.length == 1) return [nums];
    
    for(var i = 0; i < nums.length; i++){
        // set aside numbers one after the other 
        const currentNum = nums[i]; 
        const remainingNums = nums.slice(0,i).concat(nums.slice(i+1));
        // then second step find permutations from the remaining numbers 
        const remainingPermutes = permute(remainingNums); 
        // then use a for loop to make permuations from remaining numbers and concatenate them with 
        // the number that was set aside
        for(let j = 0; j < remainingPermutes; j++){
            const permutedArray = [currentNum].concat(remainingPermutes[j])
            results.push(permutedArray);
        }
    }



    return results;
};