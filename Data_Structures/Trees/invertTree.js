class Node { 
    constructor(val){
        this.val = val; 
        this.left = null; 
        this.right = null; 
    }
}



const invertTree = (root) => {
    // traverse bfs and then swap left and right
    if (root === null) return null; 

    if(root.left === null && root.right === null) return root; 

    let leftSubtree =  invertTree(root.left); 
    let rightSubtree = inverTree(root.right);
    
    root.left = rightSubtree; 
    root.right = leftSubtree; 

    return root;

};



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