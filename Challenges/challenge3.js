/*
Create a function that takes a list of non-negative integers and strings and returns 
a new list with the strings filtered out

filter_list([1,2,'a','b]) == [1,2]
filter_list([1,'a','b',0,15) == [1,0,15]

*/ 

// Function

function filter_list(numArr){
    // return a new array witht the strings filtered out 
    return numArr.filter(arrItem => {arrItem >= 0 && typeof arrItem === 'number';});
}


// Test

const list = [1,2,3,'a','b', 0 , 15];

console.log(filter_list(list));

