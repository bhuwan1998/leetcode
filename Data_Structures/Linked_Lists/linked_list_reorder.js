function ListNode(val, next){
    this.val = val === undefined? 0 : val;
    this.next = next === undefined? null : next;
}

/* @param {ListNode} head 
* @return {void} Do not return anything, modify head in-place instead 
*/

var reorderList = function(head) {
    // fast and slow pointer 

    var fast = head; 
    var slow = head;  
    var first = head; // when combining the lists together

    while(fast && fast.next){
        fast = fast.next.next; 
        slow = slow.next; 
        current = current.next;
    }

    // reverse from fast to slow pointers
    // combine that list with first half of the list

    let prev = null, curr = slow, next; 

    while(fast !== null){
        // next -> saved 
        // current.next points to null -> in the opposite direction
        next = curr.next; 
        curr.next = prev;
        prev = curr; 
        curr = next; // to move the linked list forward 
    }

    //fast now points to slow

    let first = head, second = prev; 

    while(second.next){
        let tmp1 = first.next, tmp2 = second.next; 
        first.next = second; 
        second.next = tmp1;
        first = tmp1; // move the pointers forward
        second = tmp2;  // move the pointers forward
    }

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
    



}