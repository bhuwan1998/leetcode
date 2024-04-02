class Node {
    constructor(val){
        this.val = val; 
        this.next = null;
    }
}

// const linkedListSum = (head) =>{
//     let sum = 0; 
//     let current = head; 
//     while(current !== null){
//         sum += current.val;
//         current = current.next;
//     }

//     return sum;
// }

// Unfortunately call stack is O(n) space - adding every function call onto the stack however in the iterative code we constant amount of space                     
const linkedListSum = (head) => {
    if(head === null) return 0;
    return head.val += linkedListSum(head.next); 
}

let a = new Node(2); 
let b = new Node(8); 
let c = new Node(3); 
let d = new Node(7); 


a.next = b; 
b.next = c; 
c.next = d; 

console.log(linkedListSum(a));
