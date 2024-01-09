// let array =  [[1,2,3],[4,5,6],[7,8,9]];
// for(let i = 0; i < array.length; i++) {
//     console.log("Space between rows")
//     for(let j = 0; j < array[i].length; j++)
//     console.log(array[i][j]);
// }

let position = [10, 8, 0, 5, 3]
let speed = [2, 4, 1, 1, 3]

let cars = position.map((pos, idx) => [pos, speed[idx]]);

console.log("Before Sorting: " + cars);

cars.sort((a, b) => b[0] - a[0]); // descending order 

console.log("After Sorting: " + cars);