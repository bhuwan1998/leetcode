var containsDuplicate = function(nums) {
    
    
    const numsMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (numsMap.get(nums[i])) {
            console.log(numsMap.get(nums[i]));
            return true;
        }
        numsMap.set(nums[i], 1);
    }

    return false;

};


let nums = [1,2,3,3]
console.log(containsDuplicate(nums))