// Defining a class 
class Node { 
    constructor(val){
        this.val = val; 
        this.left = null; 
        this.right = null; 
    }
}



//     a 
//    / \ 
//   b   c
//  / \   \
// c  d   f

// Deft first traversal problem 

// const bfs = (root) => {
//     if(root === null) return [];

//     let queue = [root];
//     let return_arr = [] 

//     while(queue.length > 0) {
//         let current = queue.shift();
//         return_arr.push(current.val);

//         if(current.left !== null) queue.push(current.left);
//         if(current.right != null) queue.push(current.right);
//     }
//     return return_arr;
// }




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

const j = new Node();

console.log(bfs(a));

