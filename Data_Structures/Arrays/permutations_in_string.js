/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

/*

Given two strings s1 and s2, 
return true if s2 contains a permutation of s1, or false 
otherwise.  

In other words, return true if one of s1's permutation is the 
substring of s2. 

The the substring has to contain the permutation with the letters 
being adjacent to each other in s2. 

False case can s1="ab"
s2 = "eidboaoo"

- it does contain both letters from s1 however not in a permuation and 
however in a substring but not



*/

// var checkInclusion = function(s1, s2) {

//     if(s1.length > s2.length) return false;

//     var matches = new Map();

//     var s1Count = Array(26).fill(0); 
//     var s2Count = Array(26).fill(0); 

//     const char_a = "a";
//     // s1 and s2 array
//     for(const char of s1){
//         s1Count[char.charCodeAt(0) - char_a.charCodeAt(0)] += 1;
       
//     }

//     // count the characters in the first window of s2 
//     // why should we do that 
//     for(let i = 0; i < s1.length; i++){
//         s2Count[s2.charCodeAt(i) - char_a] += 1;
//     }

//     // compare counts of characters in s1 and the current window of s2 
//     for(let i = 0; i < 26; i++){
//         if(s1Count[i] === s2Count[i]){
//             matches += 1;
//         }
//     }



//     const window_size = s1.length;

//     var l = 0; 
//     for(var r = window_size; r < s2.length; r++){
//         if(matches === 26){
//             return true;
//         } // if all match then good 

//         // Update s2Count for the new character entering the window of s2Count 
//         let index = s2.charCodeAt(r) - char_a;
//         s2Count[index] += 1;

//         // Update matches counter based on the changes in s2Count 
//         if(s1Count[index] === s2Count[index]){
//             matches += 1;
//         }
//         else if(s1Count[index] + 1 === s2Count[index] ){
//             matches -= 1;
//         }

//         // Update s2Count for the character leaving the window 
//         index = s2.charCodeAt(r - window_size) - char_a;
//         s2Count[index] -= 1;
        
        
//     }

//     // check if a permutation of s1 exists in s2
//     return matches === s1.length;
    

// };

var checkInclusion = function (s1, s2) {
    let left = 0
    let right = 0
    const s1Map = new Map()
    const s2Map = new Map()
  
    if (s1.length > s2.length) return false
  
    // set up s1Map
    for (let i = 0; i < s1.length; i++) {
      s1Map.set(s1[i], s1Map.has(s1[i]) ? s1Map.get(s1[i]) + 1 : 1)
    }
   
    // move right
    for (right; right < s2.length; right++) {
      
      let range = right - left + 1
  
      // add right char to s2Map
      s2Map.set(s2[right], s2Map.has(s2[right]) ? s2Map.get(s2[right]) + 1 : 1)
  
      // comparing
      if (range === s1.length) {
        let match = true
        for (const [ key, count ] of s1Map.entries()) {
          if (!s2Map.has(key) || s2Map.get(key) !== count) match = false
        }
        if (match) {
          return true
        }
      }
  
      // move left
      if (range === s1.length) {
        s2Map.set(s2[left], s2Map.get(s2[left]) - 1)
        left++
      }
    }
    return false
  }



s1 = "news"; 
s2 = "bhuwanbansal";  
console.log(checkInclusion(s1, s2));

