/**
 * @param {character[][]} board
 * @return {boolean}
 * 
 * 
 * 
 *  Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

    Each row must contain the digits 1-9 without repetition.
    Each column must contain the digits 1-9 without repetition.
    Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
    Note:

    A Sudoku board (partially filled) could be valid but is not necessarily solvable.
    Only the filled cells need to be validated according to the mentioned rules.


 */
var isValidSudoku = function(board) {
    // board is a 9 x 9 2D array 
    // check each row for duplicates
    let repitionCheck = new Set();  
    for(var i = 0; i < board.length; i++) {
        if(board[i] < 1 || board[i] > 9) {
            return false;
        }

        if(repitionCheck.has(board[i])) {
            return false;
        }
        else{
            repitionCheck.add(board[i]);
        }
    }
    
};