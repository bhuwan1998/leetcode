
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {  
    let counts = new Map() 
    let freqlist = Array.from({length: nums.length + 1}, () => [])

    for(let i of nums){
        counts[i] = 1 + (counts[i] || 0)
    }

    for(let [key, val] of Object.entries(counts)){
        freqlist[val].push(parseInt(key))
    }

    let result = [] 
    for(let i = freqlist.length -1; i >= 0; i--){
        for(let n of freqlist[i]) {
            result.push(n)
            if(result.length === k){
                return result
            }
        }
    }
    
};


let nums = [1,1,1,3,3,3]
let k = 2

console.log(topKFrequent(nums, k))

