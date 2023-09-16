/** 
 * Write a function, linkedlistValues, that takes in the head of a linked list 
 * as an argument. The function should return an array containing all values of the nodes 
 * in the linked list. 
 * 
 *
 */



// const linkedListValues = (head) => {
//     //todo 
//     let current = head;
//     while(current !== null){
//         arr.push(current.val); 
//         current = current.next;
// };

class Node {
    constructor(val){ 
        this.val = val; 
        this.next = null;
    }
}


const linkedListValues = (head) => {
    const values = [];
    fillValues(head, values); 
    return values; 
}

const fillValues = (head, values) =>{
    if(head === null) return; 
    values.push(head.val); 
    fillValues(head.next, values);
};


const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b; 
b.next = c; 
c.next = d; 



console.log(linkedListValues(a));


