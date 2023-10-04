/**
 * 
 * @param {character [] []} grid 
 * @return {number}
 */

var numIslands = function(grid){

    const ROWS =  grid.length; 
    const COLS = grid[0].length;
    const visited = []; // keeping track of visited cells 

    var searchGrid = function(r, c) {

        // base case for recursion
        if(r < 0 || r >= ROWS || c < 0 || c >= COLS || visited[r][c] || grid[r][c] === "0") return; 

        visited[r][c] = true;

        let directions = [
            [-1,0], // top, 
            [1,0], //bottom, 
            [0, -1], //left, 
            [0,1] //right
        ]

        for(const [dx, dy] of directions) {
            const newRow = r + dx; 
            const newCol = c + dy; 
            searchGrid(newRow, newCol);
        }
    }


    for(let i = 0; i < ROWS; i++) {
        visited.push(new Array(COLS).fill(false));
    }

   

    // number of islands
    let count = 0;

    for(let r = 0; r < ROWS; r++){
        for(let c = 0; c < COLS; c++){
            if(grid[r][c] === "1" && !visited[r][c]){
                searchGrid(r, c);
                count++;
            }
        }
    }

    return count;

}

let grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]

  // expected 1 

let grid2 = [
    ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

// expected 3 

console.log("Expected: 1 Function Return Value: ", numIslands(grid))
console.log("Expected: 3 Function Return Value: ", numIslands(grid2))