def reverse_string(str_val): 
    # Reverse a string without using any built in functions 
    # You must do this by modifying the input array in-place with O(1) extra memory
    l, r = 0, len(str_val) - 1 
    while l < r:
        temp = str_val[l] 
        str_val[l] = str_val[r]
        str_val[r] = temp
        l = l + 1
        r = r - 1 
        
    return str_val


if __name__ == "__main__": 
    str_val = ['h', 'e', 'l', 'l', 'o']
    print(reverse_string(str_val)) 

