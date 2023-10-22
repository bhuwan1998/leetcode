/**
 * Product of Array Except self 
 * Remove the current element from the array and return the product of the rest of the values 
 * Replace the current element with the product in place 
 */

var productExceptSelf = function(nums){
    let i = 0; 

    let products = [];

    while(i < nums.length){
        
        let tempNums = nums.map((x) => x); // make a shallow copy of the array 
        tempNums.splice(i, 1); // remove the current element from the array 
        const inititalValue = 1; 
        const product = tempNums.reduce((accumulator, currentValue) => accumulator * currentValue, inititalValue); // get the product of the rest of the array items 
        // replace the current element with the product
        console.log(product); //
        products[i] = parseInt(product);
        i++; 
    }

    return products; 
}


let input = [1,2,3,4]; 
let input2 = [-1,1,0,-3,3];

console.log(productExceptSelf(input2));