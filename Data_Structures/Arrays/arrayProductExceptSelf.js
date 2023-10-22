/**
 * Product of Array Except self 
 * Remove the current element from the array and return the product of the rest of the values 
 * Replace the current element with the product in place 
 */

var productExceptSelf = function(nums){
   let n = nums.length;
   let leftProducts = new Array(n); 
   let rightProducts = new Array(n); 
   let resultProduct = new Array(n);

   var leftProduct = 1;
   for(let i = 0; i < n; i++){
        leftProducts[i] = leftProduct; 
        leftProduct *= nums[i];
   }

   var rightProduct = 1;
   for(let i = n -1; i >= 0; i--){
        rightProducts[i] = rightProduct;
        rightProduct *= nums[i];
   } 

   for(let i = 0; i < n; i++){
        resultProduct[i] = parseInt(leftProducts[i] * rightProducts[i]);
   }


   return resultProduct;

}


let input = [1,2,3,4]; 
let input2 = [-1,1,0,-3,3];

console.log(productExceptSelf(input2));