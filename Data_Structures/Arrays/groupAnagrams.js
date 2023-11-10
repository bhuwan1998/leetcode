/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {


    let setToStrMap = new Map();


    for(let i = 0; i < strs.length; i++ ){
        let chars = strs[i].split('')
        chars.sort()
        let key = chars.join('') // conver the key to sorted string 
        if(!setToStrMap.has(key)){
            setToStrMap.set(key, [strs[i]])
        }
        else{
            setToStrMap.get(key).push(strs[i])
        }
    }

    const result = [...setToStrMap.values()]
    return result
    
};


// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]


let strs = ["eat","tea","tan","ate","nat","bat"]

console.log(groupAnagrams(strs))
// console.log(strs[1].split(''))