# Given a string s, find the length of the longest substring
# without repeating characters 

# Example 
# "abcabcbb" output: 3 
# "abc"


# Example 
# s = "bbbbbbb"
# with length of 1 

# Example s= "pwwkew"


class Solution:
    def lengthOfLongestSubstring(seldf, s): 
    
        curr_max = 1 

        curr_max_count = [] 

        substring = s[0]

        substring_list = []

        for i in range(len(s)): 
            if s[i] != s[0]:
                if s[i] not in substring: 
                    substring += s[i]
                    curr_max += 1
                else: 
                    substring_list.append(substring)
                    curr_max_count.append(curr_max)
                    substring = ""
                   


        curr_max_count.append(curr_max)
        print(substring_list)
        return max(curr_max_count)

        




sol = Solution() 

s = "fkjiiij"

print(sol.lengthOfLongestSubstring(s))



