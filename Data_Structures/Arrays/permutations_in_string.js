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
however in a substring but not together 



*/

var checkInclusion = function(s1, s2) {

    if(s1.length > s2.length) return false;

    var matches = new Map();

    var s1Count = Array(26).fill(0); 
    var s2Count = Array(26).fill(0); 

    console.log(s1Count); 
    console.log(s2Count); 

    const char_a = "a";
    // s1 and s2 hashmap
    var iter = 0; // for debugging purposes 
    for(const char of s1){
        s1Count[char.charCodeAt(0) - char_a.charCodeAt(0)] += 1;
        iter++;
        console.log("s1Countt" + iter);
        console.log(s1Count);
        // s2Count[char.charCodeAt(0) - char_a.charCodeAt(0)] += 1;
    }

    matches = 0 
    for(var i = 0; i < 26; i++){
        if(s1Count[i] === s2Count[i]){
            matches += 1; 
        }
        else{ 
            matches += 0;
        }
    }



    const window_size = s1.length;

    var l = 0; 
    for(var r = window_size; r < s2.length; r++){
        if(matches === 26){
            return true;
        }

        var index = s2[r].charCodeAt(0) - char_a;
        s2Count[index] += 1
        if(s1Count[index] === s2Count[index]){
            matches += 1; 
        }
        else if(s1Count[index] + 1 === s2Count[index]) {
            matches -= 1;
        }
        
    }
     
    
};

s1 = "news"; 
s2 = "newthing";  
console.log(checkInclusion(s1, s2));