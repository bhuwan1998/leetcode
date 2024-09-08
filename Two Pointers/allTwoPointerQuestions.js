/*
Easy 
1. Two Sum 2 
2. Valid Palindrome 
3. Remove Duplicates 
4. Reverse String 
5. Moving Zeroes 
Medium
1. 3 Sum  
2. 3 Sum Closest 
3. Partition Labels 
4. Container with Most Water 
5. Sort Colours 
Hard 
1. Trapping Rain Water 
2. Minimum Window Substring 
3. Sliding Window Maximum 
4. Longest Substring with At Most Two Distinct Characters 
5. Substring with Concatenation of All Words 

*/

// Two Sum 2 Given a sorted array, find two numbers such that they sum to a target value. 
// Return the indices of the two indices

var twoSum2 = function(target, numbers){
    // numbers is the array 
    // target is the sum value 

    left = 0; 
    right = numbers.length-1;
    
    while(left < right){ // iterating from left to right
        let sum = numbers[left] + numbers[right];
        if(sum === target){
            return [left, right]
        } 
        else if(sum < target){
            left++; // move left forward
        }  else {
            right--; // if the sum > target bring the right pointer down
            // as array is sorted
        }
    }

    return null;
    
}

// check 
var numbers = [1,2,3,4,5,6]; 
var target = 6;

var result = twoSum2(target, numbers);
console.log(result);

// Valid Palindrome 
// Check if a string is a valid palindrome, considering only alphanumeric character and ignoring cases.

var validPalindrome = function(word){
    // given a word check if it is a palidrome using the two poitner approach
    let left = 0; 
    let right = word.length-1;

    while(left !== right){
        if(word[left] !== word[right]){
            return false;
        }
        else{
            left++;
            right--;
        }
    }
    return true;
};


console.log(validPalindrome("madam"))