
struct ListNode { 
    int val; 
    ListNode *next; 
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {} 
    ListNode(int x, ListNode *next) : val(x), next(next) {} 
}; 

class Solution { 
    public:
        Solution();

        ListNode* mergeTwoLists(ListNode* list1, ListNode* list2){
            ListNode dummy(0); 
            ListNode *tail = &dummy; 

            while(list1 && list2){
                // move forward in the lists and compare the values and add it to dummy accordingly using the tail
            }



            return dummy.next;
        }
}; 

main(){
    Solution sol; 
    ListNode* new_list = new ListNode(1); 
    ListNode* new_list2 = new ListNode(2);
    ListNode* list = sol.mergeTwoLists(new_list, new_list2);
    printf(list);
    
}