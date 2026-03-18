// Given an m x n grid of characters board and a string word, return 
// true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, 
// where adjacent cells are horizontally or vertically neighboring. The same letter 
// cell may not be used more than once.



// TODO: Figure out a way to look at the neighbours of the word and then backtrack 
/* It feels like a greedy approach looking at the neighbours at every step but we have to backtrack /if we cannot find the next character
*/

function tuple(r: number, c: number): string {
    return `${r},${c}`;
}

function exist(board: string[][], word: string): boolean {
    // two dimensional array 
    let rows = board.length;
    let cols = board[0].length;

    // we cannot revisit a path or a character 
    let path = new Set();

    function dfs(r: number, c: number, i: number): boolean {
        // we have got the row, column and the current character within our target word 
        // if i equals the last position then we have found the word and we can get out 
        // of the search 

        if (i === word.length) {
            return true
        }

        // what if we are out of bounds 
        if (r < 0 || c < 0 || r >= rows || c >= cols
            || word[i] != board[r][c] || path.has(tuple(r, c))) {
            return false
        }

        path.add(tuple(r, c))

        // base cases are defined now
        // run depth first search 
        let res: boolean = (dfs(r + 1, c, i + 1) || dfs(r - 1, c, i + 1) || dfs(r, c + 1, i + 1) || dfs(r, c - 1, i + 1))

        // do not check the current position
        path.delete(tuple(r, c))
        return res
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (dfs(r, c, 0)) {
                return true
            }
        }
    }

    return false;
};