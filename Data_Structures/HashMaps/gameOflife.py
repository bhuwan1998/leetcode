
def gameOfLife(board): 
    """
    Change the values in place and do not return anything from the function 
    """
    # Original | New | Final State 
    # 0 | 0 | 0 
    # 1 | 0 | 1 
    # 0 | 1 | 2
    # 1 | 1 | 3


    ROWS, COLS = len(board), len(board[0])

    def countNeighbours(r, c): 
        neighbours = 0
        for i in range(r-1, r + 2): 
            for j in range( c-1, c + 2): 
                if((i == r and j == c) or i < 0 or j < 0 or i == ROWS or j == COLS): 
                    continue 
                if board[i][j] in [1,3]:
                    neighbours += 1
        
        return neighbours
    
    for r in range(ROWS):  
        for c in range(COLS):
            neighbours = countNeighbours(r, c)
            if board[r][c]: # [r][c] == 1 
                if neighbours in [2,3]: 
                    board[r][c] = 3 # 1 -> 1 
            elif neighbours == 3: 
                board[r][c] = 2


     
    for r in range(ROWS):  
        for c in range(COLS):
            if board[r][c] == 1: 
                board[r][c] = 0 
            elif board[r][c] in [2,3]: 
                board[r][c] = 1

    return board


board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]

board_new = gameOfLife(board)
print(board_new)

# expected output = [[0, 0, 0], [1, 0, 1], [0, 1, 1], [0, 1, 0]]


    
