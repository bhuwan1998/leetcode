class Node { 
    constructor(val){
        this.val = val; 
        this.left = null; 
        this.right = null; 
    }
}



const inOrderTraversal = (root) => {

    if(root === null) return null;

    let return_arr = []; 

    let stack = [];

    let current = root;

    while(stack.length > 0 || current !== null){
        if(current !== null){
            stack.push(current);
            current = current.left; 
        }
        else{
            current = stack.pop();
            return_arr.push(current.val); 
            current = current.right;
        }
        
    }
    return return_arr;

};



const a = new Node('a'); 
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const h = new Node('h');

/*
 *                 a
                  / \
                  b  c
                 /\  /\
                d e  h f

 */


a.left = b; 
a.right = c; 
b.left = d; 
b.right = e; 
c.right = f;
c.left = h;

console.log(inOrderTraversal(a));