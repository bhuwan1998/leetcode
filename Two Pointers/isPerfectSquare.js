function perfectSquare(num){
    // 1..... n O(sqrt(n))
    // brute force solution 
    // apply binary search to this solution 
    // is log n better than sqrt(n)
    // do binary search from 1 .... n till n is the input value 
  

    // O(log n)
    l = 1
    r = num
    while(l <= r){
        var mid = Math.floor((l + r)/2); 
        if (mid * mid > num){
            r = mid - 1;
        } 
        else if(mid * mid < num){
            l = mid + 1;
        }
        else{
            return true
        }
    }
    return false
}

var num = 16; 

console.log(perfectSquare(num))