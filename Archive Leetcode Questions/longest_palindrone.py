from operator import le


def longestPalindrome(s : str) -> str:
    # input s = "babad"
    # output "aba"
    # keep track of len of max string 
    max_str = ''

    if len(s) < 1: 
        return s 

    max_list = s[0] # first letter 

    for index, i in enumerate(s): 
        substr = s[index+1:]
        p = [j + index+2 for j in range(len(substr)) if substr[j] == i]


         
        

    return s


# run the string in a loop 

string_val = 'abba'
print(longestPalindrome(string_val))
