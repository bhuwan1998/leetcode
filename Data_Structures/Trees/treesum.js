/**
 * Find Sum of the tree - iteratively and recursively
 */

/*
 * 
 */

// Defining a class 
class Node { 
    constructor(val){
        this.val = val; 
        this.left = null; 
        this.right = null; 
    }
}


// Given a tree - find item in the tree
// const treeIncludes = (root, target) => {
//     // todo
//     if(root === null) return false;

//     let queue = [root];
//     while(queue.length > 0) {
//         let current = queue.shift();
//         if (current.val === target) return true;

//         if(current.left !== null) queue.push(current.left);
//         if(current.right != null) queue.push(current.right);
//     }
//     return false;
// }

const treeSum = (root) => {
    if(root === null) return 0; 
    return root.val + treeSum(root.left) + treeSum(root.right);
}


const a = new Node(1); 
const b = new Node(4);
const c = new Node(5);
const d = new Node(8);
const e = new Node(10);
const f = new Node(7);

a.right = c; 
a.left = b; 
b.left = d; 
b.right = e; 
c.right = f;

console.log(treeSum(a));