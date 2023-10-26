class Node { 
    constructor(val){
        this.val = val; 
        this.left = null; 
        this.right = null; 
    }
}



const symmetricTree = (root) => {
    var isMirror = (left, right) => {
        if(left == null && right === null){
            return true;
        }
        if(left === null || right === null){
            return false;
        }

        return (left.val === right.val) && isMirror(left.left, right.right) && isMirror(left.right, right.left);

    }

    return isMirror(root.left, root.right);

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


console.log(symmetricTree(a));