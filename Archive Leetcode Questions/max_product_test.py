import unittest 


# Find the contiguous subarray which gives the max product 

def max_product(nums) -> int:
    # max product starts with 1 
    max_product = 1 
    sub_arr = [] 
    # go through each item in the list and multiply 
    # after each iteration check if the product is lower than before 
    # if there are negative numbers 
    for i in nums:
        if not(i < 0):
            sub_arr.append(i) 
            max_sub_product = max_product * i
            max_product = max(max_product, max_product*i)
        elif i == 0 or i < 0: 
            return max_product
    print(sub_arr)
    return max_product

def test_product(): 
    nums = [2,3,-2,1]
    assert max_product(nums) == 6, 'Sum should be 6 and returned arrary should be 2,3'



if __name__ == "__main__":
    print(max_product([-2,0,-2,1]))
    test_product()
