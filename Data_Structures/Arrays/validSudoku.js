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


    Thought Process


 */
var isValidSudoku = function(board) {
    // board is a 9 x 9 2D array 
    // check each row for duplicates
    let cols = new Map()
    let rows = new Map()
    let squares = new Map() // key = (row/3, col/3) - pair of values to check 

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            if(board[i][j] === '.') {
                continue
            }
            // first check if the row or column is already in the map
            // then check if the value is in the row set or column set
            // then check if square is already in the map and check if the value is in the square set
            if (rows.has(i) && rows.get(i).has(board[i][j]) || 
                cols.has(j) && cols.get(j).has(board[i][j]) || 
                squares.has(`${Math.floor(i/3)},${Math.floor(j/3)}`) && squares.get(`${Math.floor(i/3)},${Math.floor(j/3)}`).has(board[i][j])) {
                    return false
            }
            rows.set(i, rows.get(i) || new Set())
            cols.set(j, cols.get(j) || new Set())
            squares.set(`${Math.floor(i/3)},${Math.floor(j/3)}`, squares.get(`${Math.floor(i/3)},${Math.floor(j/3)}`) || new Set())
            
            rows.get(i).add(board[i][j])
            cols.get(j).add(board[i][j])
            squares.get(`${Math.floor(i/3)},${Math.floor(j/3)}`).add(board[i][j])
        }
    }
    return true  
};


let board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","7"]]

console.log(isValidSudoku(board));

// commit 