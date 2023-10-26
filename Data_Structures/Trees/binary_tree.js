
class Node { 
    constructor(val){ 
        this.val = val; 
        this.left = null; 
        this.right = null; 
    }
}

// const depthFirstValues = (root) => {
//     stack = [ root ]; 
//     result = [];

//     if (root == null){
//         return console.log('empty tree');
//     }
//     while(stack.length > 0){
//         const current = stack.pop(); 
//         result.push(current.val)
//         // insert the children 
//         if (current.right) stack.push(current.right); 
//         if (current.left) stack.push(current.left); 
//     }
//     return console.log(result);
// };

// recursively 
// const depthFirstValues = (root) => {

//     result = [] ; 

//     if(root == null) return []; 

//     const leftValues = depthFirstValues(root.left); //[b, d, e] 
//     const rightValues = depthFirstValues(root.right); // [c, f]
//     // combine the values into a single array as a result
//     return [root.val, ... leftValues, ... rightValues];
//     // computer also uses call stack
    
// }



// Breadth first search 
const breadthFirstValues = (root) => {
    // return all elements at each level 
    // a, b, c, d, e, f 
    if(root == null) return []; 
    const queue = [root]; 
    const values = []

    while(queue.length > 0){
        const current = queue.shift(); // orders in which things leave the queue 
        values.push(current.val);
        if(current.left != null) queue.push(current.left);
        if(current.right != null) queue.push(current.right);
    }

    return values;
   
    
}





const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// console.log(depthFirstValues(a));
console.log(breadthFirstValues(a));

module.exports = {
    // depthFirstValues
    breadthFirstValues
}