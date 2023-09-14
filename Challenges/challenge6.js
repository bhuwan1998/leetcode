// Make a function to remove duplicates from sorted array 

var removeDuplicates = function(nums) {
    var newNums = nums.filter((item, index) => {
        nums.indexOf(item) === index
    })
    newNums = newNums.slice(0, newNums.length);
    return newNums
};


var arr = [1,2,3,4,5,1,2,3,4,5]

console.log(removeDuplicates(arr)); 