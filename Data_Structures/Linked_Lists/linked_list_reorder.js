function ListNode(val, next){
    this.val = val === undefined? 0 : val;
    this.next = next === undefined? null : next;
}

/* @param {ListNode} head 
* @return {void} Do not return anything, modify head in-place instead 
*/

var reorderList = function(head) {
    if (!head || !head.next) return;
    
    // Step 1: Find the middle of the list using fast and slow pointers
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Step 2: Reverse the second half of the list
    let prev = null, curr = slow, next;
    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    
    // Step 3: Merge the two halves
    let first = head, second = prev;
    while (second.next) {
        let tmp1 = first.next, tmp2 = second.next;
        first.next = second;
        second.next = tmp1;
        first = tmp1;
        second = tmp2;
    }
};
    // Helper function to print the list (for testing purposes)
function printList(head) {
    let current = head;
    while (current) {
        process.stdout.write(current.val + " -> ");
        current = current.next;
    }
    console.log("null");
}

// Example usage
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
printList(head);  // Before reordering
reorderList(head);
printList(head);  // After reordering
    


