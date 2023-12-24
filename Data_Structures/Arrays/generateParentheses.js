/* Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses. */ 

/*
* Example 1: 
* Input: n = 3
* Output: ["((()))","(()())","(())()","()(())","()()()"]


  Example 3: 
  Input: n = 2 
  Output: ["(())", "()()"]
  

*
* Example 2:
* Input: n = 1 
* Output: ["()"] 
*/


/**
 * @param {number} n 
 * @return {string[]}
 */

var generateParentheses = function(n) {
    // only add open parentheses if open < n 
    // only add closing parentheses if closed < open 
    // valid IFF open === closed === n 

    // list of valid 
    let ans = [];
    // backtracking => DFS 
    let stack = [];  

    var backtrack = function(openN, closedN) {
        if(openN === closedN & openN === n & closedN === n){
            ans.push("" + stack.join(""));
            return; 
        }
        if(openN < n){
            stack.push("("); 
            backtrack(openN+1, closedN);
            stack.pop();
        }
        if(openN > closedN){
            stack.push(")"); 
            backtrack(openN, closedN + 1);
            stack.pop();
        }
    }

    backtrack(0, 0)
    return ans;
}


console.log("Parentheses: ", generateParentheses(3));