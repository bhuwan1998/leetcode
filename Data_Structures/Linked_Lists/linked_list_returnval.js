/**
 * Basic counting algorithm - Return the value according to the index. Tracking 
 * the index of the linkedlist as it doesn't exactly have an index like an array. 
 */


class Node {
    constructor(val){
        this.val = val; 
        this.next = null;
    }
}


// const findIndex = (head, index) => {
//     let current = head; 
//     let counter = 0; 
//     while(current !== null){
//          if(count === index) return current.val;
//         current = current.next; 
//         counter++;
//     }

//     return null;

// }

const getNodeValue = (head, index) => {
    if(head === null) return null; 
    if(index === 0) return head.val; 
    return getNodeValue(head.next, index - 1);
}


let a = new Node(2); 
let b = new Node(8); 
let c = new Node(3); 
let d = new Node(7); 


a.next = b; 
b.next = c; 
c.next = d; 

console.log(getNodeValue(a, 2));