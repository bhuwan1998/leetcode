function multiply(a, b){
    if(typeof(a) == 'number' && typeof(b) == 'number'){
        return a * b;
    }
    return 1;
}

console.log(multiply(10, 'String'));