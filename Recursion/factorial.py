# Given a number return the factorial of the number using recursion 
# No math libraries are allowed to be used or imported for this function 

# 5! = 5 * 4 * 3 * 2 * 1 = 120 

def factorial(x): 
    result = 1;
    while(x > 1):
        result = result * x
        x -= 1
    
    return result 



print("Expected: 120 ", "Actual: ", factorial(5)) 


    