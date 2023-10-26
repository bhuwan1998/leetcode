/**
 * Given two strings s and t, determine if they are isomorphic. 
 * Two strings s and t are isomorphic if the charactes in s can be replaced to get t 
 * All occurences of a character must be replaced with another character while preserving the order 
 * of characters. No two characters may map to the same character, but a character may map to itself
 */

var isIsomorphic = function(s, t) {

    if(s.length != t.length) return false;

    let s_set = new Map();
    let t_set = new Set();

    for(let i = 0; i < s.length; i++){

        if(!(s_set.has(s[i]))){
            s_set.set(s[i], t[i]);
            if(t_set.has(t[i])){
                return false; 
            }
            t_set.add(t[i]);
        }

        if((s_set.has(s[i]) && s_set.get(s[i]) != t[i])){
            console.log(s_set.get(s[i]), t[i], i);
            return false; 
        }
    }
    
    return true;
};

s ="badc";
t ="baba";

// Expected output -> True 

let s_1 = "foo"; 
let t_1 = "bar"; 

// Expected output -> False

console.log(isIsomorphic(s, t)); 
// console.log(isIsomorphic(s_1, t_1));