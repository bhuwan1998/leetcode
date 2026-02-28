// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue 
// reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoot(n: number) : number {
    
    // it is a recursive function 

    // base case is that the sum should be a single digit so that we cannot further narrow it down 
    if(n.toString().length < 2 && n >= 0 ){
        return n 
    }

    let nums = n.toString().split('')
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        console.log(sum + " " + nums[i])
        sum += Number(nums[i])
    }
    
    return digitalRoot(sum)
}

console.log("Digital Root: of 942 is " + digitalRoot(942));