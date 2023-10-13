/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {

    // ignore whitespace 
    // assume the result is positive if neither - or + is present in the string  
    // convert digits into int
    // if no digits read -> integer is 0 
    // if integer is out of 32-bit-signed int range -> then clamp the integer that it remains 
    // in the range. Specifically, integers less than -2^31 should be clamped 


    /*
    Aim -> convert string to number 
    And Recognise if the value is a negative or positive
    */

    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);

    s = s.trim();

    let sign = 1; 
    let result = 0; 
    let i = 0; 

    if(s[i] === "-" || s[i] === "+"){
        sign = s[i] === "-" ? -1 : 1; 
        i++;
    }   

    while(i <= s.length && s[i] >= "0" && s[i] <= "9" ){
        const digit = parseInt(s[i]);
        
        // check for overflow 
        if (result > Math.floor((INT_MAX - digit) / 10)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        result = result * 10 + digit;
        i++; 
    }

    return sign * result; 
};


// Alternate Solution 

/**
 * 
 * var myAtoi = function(s) {
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);

    s = s.trim(); // Remove leading/trailing whitespace

    let sign = 1;
    let resultStr = "";
    let i = 0;

    if (s[i] === '-' || s[i] === '+') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        resultStr += s[i];
        i++;
    }

    if (resultStr === "") {
        return 0; // No valid digits found
    }

    const result = sign * parseInt(resultStr);

    if (result > INT_MAX) {
        return INT_MAX;
    } else if (result < INT_MIN) {
        return INT_MIN;
    }

    return result;
};

 */