import java.util.HashMap;

public class leetcode {

    public static void main(String[] args ){
        String case_1 = "aaabccc"; 
        String case_2 = "abcabc"; 
        String case_3 = "acbca";

        System.out.println(firstnotrepeatingchar(case_3));
        System.out.println(firstnotrepeatingchar(case_2));
        System.out.println(firstnotrepeatingchar(case_1));
    }

    // leetcode 1 
    public static char firstnotrepeatingchar(String s){
        
        HashMap<Character, Integer> char_counts = new HashMap<>(); 
        for(int i = 0; i < s.length(); i++){
            char c = s.charAt(i); 
            if(char_counts.containsKey(c)){
                char_counts.put(c, char_counts.get(c) + 1); // counter for each character 
            } else {
                char_counts.put(c, 1);
            }
        }

        for(int i = 0; i < s.length(); i++){
            char c = s.charAt(i); 
            if(char_counts.get(c) == 1) return c;
        }
        return '_';
    }

    // How many islands are there in a grid 
    /* 
     * 11110        11000
     * 11010        11000
     * 11000        00001
     * 00000 - 1    00110 - 3 
     */
    // leetcode Number of Islands 
    public int numIslands(char [][] grid){
        // using breadth first search to find this out 
        int count = 0; 

        for (int i = 0; i < grid.length; i++) { // rows 
            for (int j = 0; j < grid[i].length ; j++) { // columns
                // going through each element 
                // see a 1 and check its neighbours - breadth first search 
                // convert all the neighbours to zeros to eliminate the possibility of counting a duplicate 
                if(grid[i][j] == '1'){
                    count++;
                    callBFS(grid, i, j); 
                }

            }
            
        }
        return count;
    }

    public void callBFS(char[][] grid, int i, int j){
        if(i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == '0')
            return;

        grid[i][j] = '0'; // base case 
        callBFS(grid, i-1, j); // down
        callBFS(grid, i+1, j); // up
        callBFS(grid, i, j-1); // left
        callBFS(grid, i, j+1); // right
    }
}