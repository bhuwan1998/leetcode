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

const treeIncludes = (root, target) => {
    // todo
    if(root === null) return false;
    if(root.val === target) return true;
    return treeIncludes(root.left, target) || treeIncludes(root.right, target);

}


const a = new Node('a'); 
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.right = c; 
a.left = b; 
b.left = d; 
b.right = e; 
c.right = f;

console.log(treeIncludes(a, 'f'));