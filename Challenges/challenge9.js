// Format a string of names 'Bart, Lisa & Maggie' 

/* Give an array containing hashes of names 
Return: a string formatted as a list of names separated by commas except for the last two 
names, which should be separated by an ampersand. 

list([{name: 'Bard'}, {name: 'Lisa'})
returns Bard & Lisa

Empry List 
returns '' empty string

Note that this is a list of name objects - understand how to access each object value 

*/ 

function list(names){
    // Write your code 
    let ret_string = '';    

    if(names.length === 0){
        return ret_string;;
    }
    if (names.length === 1){
        return names[0].name;
    }   

    names.forEach((element, index) => {
        const name = element.name;
        if(index === names.length - 2){
            ret_string = ret_string + '' + name;
        }
        else if (index !== names.length - 1){
            ret_string = ret_string + name + ', '; // for all elements group the string together with each element with a comma
        } 
        else{
            ret_string = ret_string + " & " + name; // at the end of the list add a ampersand
        }
            
    });

    return ret_string;
}

let list_ = [{name: 'Bard'}];

console.log(list(list_))
// It is also possible to use reduce method here 
// Whenever there is an accumulator then you can use the reduce method like here 



