/**
 * This is only for finding maximum height of a binary tree.
 */

class Node { 
    constructor(val){
        this.val = val; 
        this.left = null; 
        this.right = null; 
    }
}

// Iterative Method 
const maxHeightIterative = (root) => {
    if(root === null) return 0;
    let queue = [root]; 
    var cur = {}; // tree node object 
    var count = 0, size, i;

    while(queue.length > 0){
        size = queue.length; 
        for(i = size; i > 0; i--){
            cur = queue.shift(); // get the next val 
            if(cur.left !== null && cur.left !== undefined){
                queue.push(cur.left);
            }
            if(cur.right !== null && cur.right !== undefined){
                queue.push(cur.right); 
            }
        }
        count++;
    }
    return count;
}


// Recursive Method 
const maximumHeight = (root) => {

    if (root=== null) return 0; 
    return 1 + Math.max(maximumHeight(root.left), maximumHeight(root.right));

};






const a = new Node('a'); 
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g')

a.right = c; 
a.left = b; 
b.left = d; 
b.right = e; 
c.right = f;
d.left = g;

console.log("Recursive: ", maximumHeight(a));

console.log("Iterative: ", maxHeightIterative(a));