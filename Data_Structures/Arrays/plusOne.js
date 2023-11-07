/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1;
    for(let i = digits.length -1; i >= 0; i--){
        digits[i] = digits[i] + carry; 
        carry = Math.floor(digits[i] / 10)
        digits[i] = digits[i] % 10 
    }

    if(carry > 0){
        digits.unshift(carry)
        return digits 
    }

    return digits 
    
};


let digits = [1,2,3]

let digit1 = [9]

console.log(plusOne(digit1))

