/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    s = s.split('').sort().join('')
    t = t.split('').sort().join('')

    return t === s
    
};


let s = "anagram", t = "nagaram"
console.log(isAnagram(s, t))
