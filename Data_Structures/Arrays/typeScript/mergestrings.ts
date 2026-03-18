function mergeAlternately(word1: string, word2: string): string {
    
    let maxLength = Math.max(word1.length, word2.length)

    let result: string[] = [];
    
    for(let i = 0; i < maxLength; i++){
        if(i < word1.length) result.push(word1[i])
        if(i < word2.length) result.push(word2[i])
    }

    return result.join("");

};


const word1 =  "abrs"; 
const word2 =  "pqqwewuieqw"

console.log(mergeAlternately(word1, word2))