/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let hashTable = new Map()
    hashTable.set("I" ,1);
    hashTable.set("V", 5); 
    hashTable.set("X", 10);
    hashTable.set("L" , 50);
    hashTable.set("C" ,100);
    hashTable.set("D" , 500); 
    hashTable.set("M" , 1000);
    hashTable.set("IV" , 4); 
    hashTable.set("IX" , 9);
    hashTable.set("XL" , 40);
    hashTable.set("XC" , 90);
    hashTable.set("CD" , 400);
    hashTable.set("CM" , 900);
    

    // Split the string into a list of characters and match against the hashtable
    // first split into doubles 
    // then split into singles 


let finalInt = [];

for(let i = 0; i < s.length - 1; i++) {
    if(hashTable.has(s.substring(i, i+2))){
        console.log(s.substring(i, i+2));
        finalInt.push(hashTable.get(s.substring(i, i+2)));
        s = s.replace(s.substring(i, i+2), " ");
    }
}



for(let i = 0; i < s.length; i++) {
    if(hashTable.has(s[i])){
        finalInt.push(hashTable.get(s[i]));
    }
}


let finalVal = 0; 

finalInt.forEach(item => finalVal += item);

return finalVal; 

};


console.log(romanToInt("MCMXCIV"));