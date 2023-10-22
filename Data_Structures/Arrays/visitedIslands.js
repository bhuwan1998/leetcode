var searchGrid = function(grid, visited, row, col){
    const numRows = grid.length; 
    const numCols = grid[0].length; 

    // base case
    if(row < 0 || row >= numRows || col < 0 || col >= numCols || visited[row][col || grid[row][col] === 0){
        return; 
    }

    // Mark the current cell as visited
    visited[row][col] = true; 

    // Explore all neighbours 
    directions = [
        [-1,0] // top, 
        [1,0] //bottom, 
        [0, -1] //left, 
        [0,1] //right
    ]; 

    for(const [dx, dy] of directions){ 
        const newRow = row + dx; 
        const newCol = col + dy; 
        searchGrid(grid, visited, newRow, newCol); 
    }
}

