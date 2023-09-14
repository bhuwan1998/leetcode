/*

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits

If the function is passed a valid PIN string, return true, else return false 

*/

function validPIN(pin){
    // return true or false
    const fourDigitsRegex = /(^[0-9]{4}$)/;
    const sixDigitsRegex = /(^[0-9]{6}$)/;

    const result1 = pin.match(fourDigitsRegex); 
    const result2 = pin.match(sixDigitsRegex);

    return !(!result1 && !result2);

}

console.log(validPIN('123456'));