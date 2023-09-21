class Node { 
    constructor(val){
        this.val = val; 
        this.left = null; 
        this.right = null; 
    }
}

// Recursive 
const sameTree = (p, q) => {
    if(!p && !q){ // if both roots are equal to null
        return true;
    }
    else if(!p || !q || p.val !== q.val){
        return false; 
    }

    return (sameTree(p.left, q.left) && sameTree(p.right, q.right));
}

const sameTreeIterative = (p,q) => {
    
}




const a = new Node('1'); 
const b = new Node('2');
const c = new Node('3');
const d = new Node('1');
const e = new Node('2');
const f = new Node('3');

a.left = b; 
a.right = c; 
d.left = e; 
d.right = f; 

// a and d are root of binary trees 
console.log(sameTree(a, d));