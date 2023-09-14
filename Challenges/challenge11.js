/*
Write a function, persistence, that takes in a positive parameter num and 
returns its multiplicative persistence, which is the number of times you must 
mutliply the digits in num until you reach a single digit.

Case1: 
persistence(39) == 3 // 3 * 9 = 27, 2 * 7 = 14, 1 *4 = 4 therefore the answer is 3


// muliply the number of times you until you reach a single digit

base case is that the number from last multiplication is smaller than 10 - so we return the accumulated number of persistence 

*/ 


function persistence(num) {
    if(num < 10){
        return 0;
    }
    let product = 1;
    while(num > 0){
        product *= num % 10;
        num = Math.floor(num/10);

    }
    return 1 + persistence(product);
}

console.log(persistence(999));


