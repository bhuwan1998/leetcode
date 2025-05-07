

// Traverse a 1d array from two sides 
// Traverse both ends of the array at the same time using pointers 

// Note: All 2d Arrays are not square matrices - m x n matricesq
// Traverse a 2d array row by row 


// Traverse a 2d array in a spiral using recursion 

// m x n matrix
function spiralTraversal(arr) {
    // this is assuming that the arr is a square matrix 
    for (let i = 0; i < arr[0].length; i++) {
        if(i !== arr.length){
            console.log(arr[0][i])}
        }
    


    return;
}

const arr = [[1, 2, 3, 4, 5,8],
[16, 17, 18, 19, 6, 10],
[15, 24, 25, 20, 7, 11],
[14, 23, 22, 21, 8, 15],
[13, 12, 11, 10, 9, 16]];


// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i][arr.length])
// }

spiralTraversal(arr);
console.log("Array Length: ", arr[0].length)
// Traverse a 2d array to find islands - island definition is in leedcode 