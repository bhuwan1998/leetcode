/**
 * Construct Binary Tree from PreOrder and Inorder Traversal
 * 
 * Given two integer arrays preorder and inorder where preorder is the preorder 
 * traversal of a binary tree and inorder is the inorder traversal of the same tree 
 * , construct and return the binary tree.
 * 
 *       3
 *      / \
 *     9  20
 *       /  \
 *      15   7
 * 
 * Case 1: Tree as shown above has the preorder: [3,9,20,15,7] inorder: [9,3,15,20,7]
 * Check the index of where the first item is in the second list to find the root.left subtree 
 * Output: [3,9,20,null, null, 15, 7] -> Return in breadth first search order with root on top
 */
class TreeNode { 
    constructor(val){
        this.val = val; 
        this.left = null; 
        this.right = null; 
    }
}


var buildTree = function(preorder, inorder) {
    if(preorder.length === 0 || inorder.length === 0){
        return null;
    }

    const rootval = preorder[0]; 
    const root = new TreeNode(rootval);

    // find the index of the root node in inorder 
    const rootIndexInInorder = inorder.indexOf(rootval); 

    const leftInorder = inorder.slice(0, rootIndexInInorder); 
    const rightInorder = inorder.slice(rootIndexInInorder + 1); 
    const leftPreorder = preorder.slice(1, 1 + leftInorder.length); 
    const rightPreorder = preorder.slice(1 + leftInorder.length); 

    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);

    return root; 

}


let preorder = [3,9,20,15,7]; 
let inorder=  [9,3,15,20,7];

console.log(buildTree(preorder, inorder));




