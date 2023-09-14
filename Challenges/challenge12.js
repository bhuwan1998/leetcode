/* 
Write a simple function that takes as a parameter a date object and 
returns a boolean value representing whether the date is today or not 

Make sure that your function does not return false positive by 
just checking the day

*/ 


// assuming the date param is a date object
function isToday(date) {
    // const checkDay = date.getDate(); 
    // const checMonth = date.getMonth();
    // const checkYear = date.getFullYear();

    // const today = new Date(); 

    // const todayDay = today.getDate(); 
    // const todayMonth = today.getMonth();
    // const todayYear = today.getFullYear();

    // return checkDay === todayDay && checkYear === todayYear && checMonth === todayMonth;
    return new Date().toDateString() === date.toDateString();
}


var tomorrow = new Date();

tomorrow.setDate(tomorrow.getDate() - 5);
console.log(tomorrow);
console.log(isToday(tomorrow));