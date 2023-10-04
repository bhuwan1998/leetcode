# Imagine you have a black and white image 
# These are pixels of a an image 
# The matrix represents a two-dimensional array
# Two-dimensional array only has zero and one 
# Zero - represents a white pixel and vice versa for one (black)


# Two or more pixels that are horizontally or vertically adjacent
# if they are not connected to the border you have to remove them 


'''
 [[1, 0, 0, 0, 0, 0]
 [0, 1, 0, 1, 1, 1]
 [0, 0, 1, 0, 1, 0]
 [1, 1, 0, 0, 1, 0]
 [1, 0, 1, 1, 0, 0]
 [1, 0, 0, 0, 0, 1]]

 [[1, 0, 0, 0, 0, 0]
 [0, 0, 0, 1, 1, 1]
 [0, 0, 0, 0, 1, 0]
 [1, 1, 0, 0, 1, 0]
 [1, 0, 0, 0, 0, 0]
 [1, 0, 0, 0, 0, 1]]


'''



def removeIslands(matrix): 
    pass




image =  [[1, 0, 0, 0, 0, 0]
 [0, 1, 0, 1, 1, 1]
 [0, 0, 1, 0, 1, 0]
 [1, 1, 0, 0, 1, 0]
 [1, 0, 1, 1, 0, 0]
 [1, 0, 0, 0, 0, 1]]


print("Output: ", removeIslands(image))