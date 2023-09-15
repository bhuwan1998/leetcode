/** 
 * @param {number[][]}
 * @return {void} Do not return anything, modify matrix in-place instead
 * */ 
var rotate = function(matrix) {

    if(matrix && matrix.length === 1){
        return ;
    }

    if(matrix && matrix.length !== matrix[0].length){
        return;
    }
// Swap column with rows and find a pattern for either the row or column and use temp values in order 	
    let i =  0; // col index to move forward every iteration 
    let rows_to_proceed = 0; // starting with first row 
    let col = matrix.length; // number of columns - As this is an n x n matrix 
    let rows_to_change = 0; //for column side

    while(rows_to_proceed < matrix.length){ // for every row in the matrix that will become the column at the start 
        while(i < matrix.length){ // reaching the last columm index for the current row we are rotating 
            let temp = matrix[rows_to_proceed][i]; 
            matrix[rows_to_proceed][i] = matrix[rows_to_change][col]; 
            matrix[rows_to_change][col] = temp;
            i += 1; 
            rows_to_change+=1;
        }
        i = 0;// reset for every iteration
        rows_to_change = 0; // reset for every iteration
        rows_to_proceed += 1; // move to the next row 
        col -= 1;
    }

    // return matrix;
    return matrix;

};


let matrix = [[1,2,3,4],[5,6,7,8],[9, 10, 11, 12]];

/*
[1,2,3, 4]
[5,6,7, 8]
[7,8,9]

*/

console.log(rotate(matrix));
