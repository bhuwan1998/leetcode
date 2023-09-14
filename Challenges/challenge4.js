// Implement a difference function, which subtracts one list from another and returns the resutt

// arrayDiff([1,2], [1]) == [2]

// Usually in python we can use set difference function to find the difference between two lists

// function arrayDiff(a, b){
//     if(a.length == 0){
//         return b;
//     }

//     if(b.length == 0){
//         return a;
//     }

//     let newA = a;
//     let newB = b;

//     a.forEach((arrItem, arrIndex) => {
//         const aCopy = a.slice();
//         const bCopy = b.slice();
//         // we found this element in both lists
//         if (b.includes(element)){
//             newA = aCopy.filter(item => item !== arrItem);
//             newB = bCopy.filter(item => item !== arrItem);
//         }

//     });

//     console.log(newA);

//     return newA;  // this is the incorrect implementation of set difference

// }

// Correct Implementation

function arrayDiff(a, b) {
  if (a.length == 0) {
    return b;
  }
  if (b.length == 0) {
    return a;
  }

  const retList = [];

  for (let element of a) {
    if (!b.includes(element)) {
      retList.push(element);
    }
  }

  return retList;
}


// let a = [1,2,3,4,5,10]; 
// let b = [1,2,6,7,8];

// console.log(arrayDiff(a, b));

let a = [1,2,3,4,5,10];
let b = [1,2,6,7,8];

let intersection = b.filter(x => !a.includes(x)); 

console.log(intersection);

