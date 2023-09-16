/**
 * Finding a target value from the linked list.  
 */


class Node {
    constructor(val){
        this.val = val; 
        this.next = null;
    }
}


// O(n) and O(1) - iterative solution
// const findTarget = (head, target) => {
//     let current = head; 
//     while(current !== null){
//         if(current.val === target){
//             return true;
//         }
//         current = current.next;
//     }
//     return false;
// }

const findTarget = (head, target) =>{
    if(head.val === target) return true;
    if(head === null) return false; 
    return findTarget(head.next, target);
}



let a = new Node(2); 
let b = new Node(8); 
let c = new Node(3); 
let d = new Node(7); 


a.next = b; 
b.next = c; 
c.next = d; 

console.log(findTarget(a, 7));