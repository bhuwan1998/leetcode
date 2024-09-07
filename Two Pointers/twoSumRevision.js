/* 
This a two sum practice question where the assumption is that the array is unsorted and 
because it is unsorted we cannot use the normal approach of two pointers here. 
*/

var twoSum = function(numbers, target) {

// traverse the arrays from both sides is not effective 
// use a hastable instead 

// keep track of numbers which do not work
    var hashTable = {}; 

    for(let i = 0; i < numbers.length; i++){
        let complement = target - numbers[i]; 

       if(hashTable.hasOwnProperty(complement)) {
        // if the complement is found, return the indices, 
        return [hashTable[complement], i]
       }
       else{
        hashTable[numbers[i]] = i; 
       }

       console.log("Number: ", numbers[i], " ", "HashTable: ", hashTable[numbers[i]])
    }

    

    return [];

}


const target = 10;

var numbers  = [1,5,3,4,6,5]; 


var startTime = performance.now();

var result = twoSum(numbers, target); 

var endTime = performance.now(); 
console.log(result)
console.log(endTime - startTime)