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

// const dfs = (root) => {

//         if(root){

//         let stack = [root];
//         let return_arr = [] 

//         while(stack.length > 0) {
//             const current = stack.pop(); 
//             return_arr.push(current.val);

//             if(current.right){
//                 stack.push(current.right);
//             }
//             if(current.left) {
//                 stack.push(current.left); 
//             }
//         }
//         return return_arr;
//     }
//     return []; 
// }


// DFS recursively 
const dfs = (root) => {
    if(root === null) return [];
    let leftTree = dfs(root.left); 
    let rightTree = dfs(root.right);
    return [root.val, ...leftTree, ...rightTree];

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

const j = new Node();

console.log(dfs(a));

