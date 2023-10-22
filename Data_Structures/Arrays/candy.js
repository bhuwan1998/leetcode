/**
 * 
 * There are n children standing in a line. Each child is 
 * assigned a rating value given in the integer array ratings.
 * You are giving candies to these children subjected to the 
 * following requirements:
 * 
 * Each child must have at least one candy. 
 * Children with a higher rating get more candies than their neighbors.
 * Return the minimum number of candies you need to have to distribute 
 * the candies to the children.
 */


/*
* Input ratings = [1,0,2]
Output: 5 

* Input ratings = [1,2,1]
Output: 4 
*/


var candy = function(ratings){

    let ans = Array(ratings.length).fill(1); 

    if(ratings.length == 1){return 1};

    for(let i=0; i<ratings.length; i++){
        if(i + 1 < ratings.length){
            if(ratings[i] < ratings[i + 1]){
                ans[i+1] = ans[i] + 1; 
            }
        }
    }

    for(let i=ratings.length-1; i >= 0; i--){
       if(ratings[i] > ratings[i + 1] && ans[i] <= ans[i + 1]){
            ans[i] = ans[i+1] + 1;
        }
    }

    let sum = 0;

    ans.forEach(item => sum += item);    
    return sum;  

}


let ratings = [1,2,2]

console.log(candy(ratings));