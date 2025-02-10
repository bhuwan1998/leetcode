/*  
You have n coins and you want to build a staircase with these coins. The staircase 
consists of k rows where the ith row has exactly i coins. The last row of the staircase
may be incomplete
*/

// Given the integer n, return the number of completed rows of the staircase you will build

// given n number of coins


function arrangingCoins(n){
    // total number of coins
    // keep track of the number of coins left 
    // with each row the number of coins will change 
    // starting with each row number we need to subtract the number of coins depending on the index 
    // need to keep track of the two counters - number of coins left 


    var num_of_coins = n;
    console.log(num_of_coins)
    iterator = 0;
    var i = 1; 

    var completed = 0;

    while(num_of_coins > 0){
        if(num_of_coins == 0){
            break;
        }
        
        if(num_of_coins >= i){
            completed++;
        }

        console.log("Coins: ", num_of_coins, " iteration: ", i)
        num_of_coins = num_of_coins - i; 
        i++; 
        
    }

    return completed;
}



function arrangingCoins2(n){
    function sumFast(n){
        return Math.floor((n/2)*(n + 1))
    }


    // n is the upper bound is the number of rows we have 
    // we will usually have less than that upper bound anyway 
    // left boundary is 1 and right boundary is n 

    var l = 1; 
    var r = n; 
    var res = 0;

    while(l <= r){
        var mid = Math.floor((l + r)/2);
        // mid is the row that we are considering
        var coins = sumFast(mid); 

        if(coins > n){
            r = mid - 1;
        }
        else{
            l = mid + 1
            res = Math.max(mid,res);
        }
    }

    return res;

}





console.log(arrangingCoins2(10))