/**
 * @param {number} target 
 * @param {number[]} position 
 * @param {number[]} speed 
 * @return {number}
 */

var carFleet = function(target, position, speed) {

    const cars = position.map((pos, idx) => [pos, speed[idx]] );

    let stack = [] ;

    let fleetCount = 0; 

    cars.sort((a,b) => b[0] - a[0]); // sort cars by position descending order 

    let timeToReachTarget = cars.map(([pos, spd]) => (target - pos) / spd);

    
    for(let time of timeToReachTarget) {
        while(stack.length > 0 && time >= stack[stack.length - 1]) {
            stack.pop(); // if a car behind reaches sooner, pop the car in front 
        } 

    }

    
};

let target = 12
let position = [10,8,0,5,3]
let speed = [2,4,1,1,3]

console.log(carFleet(target, position, speed))