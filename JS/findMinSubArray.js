var minSubArrayLen = function(target, nums) {
   let l = 0; 
   let r = 0; 
   let currentSum = 0; 

   let minLength = nums.length +1;
   while(r < nums.length){
    currentSum += nums[r]; 

    while(currentSum >= target){
        minLength = Math.min(minLength, r-l+1); 
        currentSum -= nums[l];
        l++;
    }
    r++;
   }
    console.log("Left: ", l); 
    console.log("Right: ", r);  
   // Check if minLength was updated (a valid subarray was found)
   return minLength === nums.length + 1 ? 0 : minLength;
};



console.log(minSubArrayLen(4, [1,1,2,3,1]))