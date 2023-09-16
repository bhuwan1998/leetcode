import numpy as np 

class solution:

    def find_distance(self, point):
        # find distance from origin (0,0)
        return  np.sqrt((point[0]**2)+(point[1]**2))

    def kClosest(self, points, k): 
        current_distance = np.inf
        dist_of_ps = [] # tuple of dist and point 
        
        dist_of_ps = [(self.find_distance(p), p) for p in points]
        
        dist_of_ps.sort(key = lambda x: x[0])
        
        temp = dist_of_ps[0:k]
        
        ret_list = []
        for d, p in temp:
            ret_list.append(p)

        return ret_list 



new_solution = solution() 

points = [[1,3], [-2,2]]
k = 1

print(new_solution.kClosest(points, k))

