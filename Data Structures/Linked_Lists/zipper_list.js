/**
 * Taking two lists and entangle by alternating the values in the list and create a final linked list.
 */


// whenever count is even choose the first list and odd for the second list until we reach the end of list with min(m, n)

class Node {
    constructor(val){
        this.val = val; 
        this.next = null;
    }
}


const entangleLists = (head1, head2) => {
    let tail = head1;
    let current1= head1.next; 
    let current2 = head2;
    let count = 0;
    
    while(current1 !== null && current2 !== null){
        if(count % 2 === 0){
            tail.next = current2;
            current2 = current2.next;
        }else{
            tail.next = current1;
            current1 = current1.next;
        } 
        tail = tail.next;
        count+=1;
    }

    if(current1 !== null) tail.next = current1;
    if(current2 !== null) tail.next = current2;


    return head1
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b; 
b.next = c; 
c.next = d; 


const e = new Node('E');
const f = new Node('F');
const g = new Node('G');
const h = new Node('H');

e.next = f; 
f.next = g; 
g.next = h; 


let list_ = entangleLists(a, e);

current = list_; 

while(current !== null){
    console.log(current.val);
    current = current.next;
}


