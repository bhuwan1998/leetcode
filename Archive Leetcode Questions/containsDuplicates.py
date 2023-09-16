
# input list = [1,2,3,4] # every element is distinct therefore the return value is false
# input list = [1,1,2,3,4] # 1 is repeated therefore the return value is true 
class Solution: 
    def containsDuplicate(self, nums) -> bool: 
        return not(len(nums) == (len(set(nums))))



if __name__ == "__main__":
    input_list = [1,2,3,4]
    input_list_1 = [1,1,2,3,4]

    x = Solution() 
    print("Answer should be false: ",x.containsDuplicate(input_list))
    print("Answer should be true: ",x.containsDuplicate(input_list_1))

