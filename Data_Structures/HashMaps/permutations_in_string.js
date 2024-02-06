/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {

    if(s1.length > s2.length) return false;

    var matches = new Map();

    var s1Count = Array(26).fill(0); 
    var s2Count = Array(26).fill(0); 

    const char_a = "a";
    // s1 and s2 hashmap 
    for(const char of s1){
        s1Count[char.charCodeAt(0) - char_a.charCodeAt(0)] += 1;
        s2Count[char.charCodeAt(0) - char_a.charCodeAt(0)] += 1;
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



    const window_size = s1.length();

    var l = 0; 
    for(var r = window_size; r < s2.length(); r++){
        if(matches === 26){
            return true;
        }

        var index = s2[r].charCodeAt(0) - char_a;
        s2Count[index] += 1
        if(s1Count[index] === s2Count[index]){
            matches += 1; 
        }
        else if(s1Count[index] + 1 === s2Count[index]) {
            
        }
        
    }
     
    
};

s1 = "news"; 
s2 = "";
checkInclusion(s1, s2);