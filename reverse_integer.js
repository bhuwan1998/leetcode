/**
 * @param {number} x
 * @return {number}
*/

var reverse = function(x) {
    if (!Number.isInteger(x)) return 0;
    if(x.toString().length === 1) return x; 
    var val_string = x.toString()
    var ret_str = '';
    var char_arr =  val_string.split('');
    if(char_arr.includes('-')){
        ret_str = '-';
        char_arr.splice(0,1);
    }
    else{
        ret_str = '';
    }
    
    for(var i = char_arr.length-1; i >= 0; i--){
        ret_str += char_arr[i];
    }
    if(Number.parseInt(ret_str) > (2**(31))-1 || Number.parseInt(ret_str) < ((-2)**(31))) return 0;
    return Number.parseInt(ret_str);
};


console.log(reverse(-122));



/* 
Given a signed 32-bit integer x, return x with its 
digits reversed. If reversing x causes the value to go outside 
the signed 32-bit integer range then return 0.
*/