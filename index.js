// js objects 

let person = {
    name: 'Mosh', 
    age: 30
};

person.name = 'Jolly';

let selection = 'name';

person[selection] = "New name";

// person['name'] = 'Bhuwan'; 

console.log(person.name);

let selectedColours = ['red', 'blue']; 
selectedColours.push('new item')
console.log(selectedColours);


// functions 
function greet(name) {
    console.log(name); 
    
}

greet('my name'); 

function square(number){
    return number * number;
}


let number = square(2);
console.log(number);