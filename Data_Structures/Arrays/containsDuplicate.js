var containsDuplicate = function(nums) {
    let freq_count = new Map()
    let counter = 0
    for(let i = 0; i< nums.length; i++){
        freq_count.set(nums[i], counter)
    }
    for(let i = 0; i< nums.length; i++){
        if(freq_count.has(nums[i])){
            let val = freq_count.get(nums[i])
            freq_count.set(nums[i], val+1)
            if(freq_count.get(nums[i]) > 1){
                return true
            }
        }
    }

    console.log(freq_count)
    return false

};


let nums = [1,2,3]
console.log(containsDuplicate(nums))