# first non repeating character 
# aaabccccdeeef -> b  
# abcbad -> c 
# abcabcabcabc -> -1 

def first_non_repeating_char(case):
    # case is my string
    # list of chars 
    list_of_chars = {} 
    for i in case: 
        counts = case.count(i) # char count 
        list_of_chars[i] = counts
    
    for key, value in list_of_chars.items(): 
        if value == 1: 
            return key 
    
    return -1
    

print(first_non_repeating_char("abcbad"))

    
