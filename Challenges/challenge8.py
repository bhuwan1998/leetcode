class TreeNode: 
    def __init__(self,val=0, left=None, right=None): 
        self.val = val 
        self.left = left
        self.right = right

def sortedArrayToBST(nums): 
    # base cast when left pointer > right pointer 

    def helper(left, right): 
        # what portion of list we are interested in
        if left > right: 
            return None 
        
        m = (left + right)//2
        root = TreeNode(nums[m])
        root.left = helper(left, m-1)
        root.right = helper(m+1, right)

        return root 
    
    return helper(0, len(nums)-1)


sorted_list = [1,2,3,4,5,6,7,8,9,10,11,12]
