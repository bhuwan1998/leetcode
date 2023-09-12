var majorityElement = function(nums){
    // create an empty Map to score unique values and thier counts 
    const uniqueValMap = new Map(); 

    for(const num of nums){
        if(uniqueValMap.has(num)){
            uniqueValMap.set(num, uniqueValMap.get(num)+1);
        }
        else{
            uniqueValMap.set(num, 1);
        }
    }

    let maxcount = 0; 
    let numberWithMaxCount; 

    for(const [number, count] of uniqueValMap){
        if (count > maxcount){
            maxcount = count;
            numberWithMaxCount = number;
        }
    }

    return numberWithMaxCount;

    
}

let nums = [3,2,3,2,2,2,2];
console.log(majorityElement(nums));