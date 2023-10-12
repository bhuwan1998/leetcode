class Node {
    constructor(val){
        this.val = val; 
        this.next = null;
    }
}


// const reverseLinkedList = (head) => {
//     let current = head; 
//     let prev = null; // current previous value  
//     while(current !== null){
//         const next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//     }

//     return prev;
// }

const reverseLinkedList = (head, prev = null) => {
    if(head === null) return prev; 
    const next = head.next; 
    head.next = prev; 
    return reverseLinkedList(next, head);

}


const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b; 
b.next = c; 
c.next = d; 


reverseLinkedList(a); 

let current = reverseLinkedList(a);

console.log(reverseLinkedList(d));

while(current !== null){
    console.log(current.val, '->');
    current = current.next;
}