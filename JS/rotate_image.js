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

    let l = 0; 
    let r = matrix.length -1; 
    while(l < r){
        for(let i = 0; i < r-l; i++){
            let top = l; 
            let bottom = r; 

            let topLeft = matrix[top][l+i];
            
            matrix[top][l+i] = matrix[bottom- i][l]; 
            matrix[bottom-i][l] = matrix[bottom][r-i]; 
            matrix[bottom][r-i] = matrix[top+i][r]; 
            matrix[top+i][r] = topLeft;
        }


        l+=1; 
        r-=1;
    }
    return matrix;

};  


let matrix = [[1,2,3],[5,6,7],[9,10,11]];

console.log(rotate(matrix));