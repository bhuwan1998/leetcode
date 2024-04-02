/**
  Definition for singly-linked list. */

function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
 }
 
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// var reverseBetween = function(head, left, right) {

//     // traverse through the linked list 
//     // technically we just need to reverse the linked list from left integer to right 
//     // keep the rest of the list as it is 

//     // store the previous node of left and next node of right unless right is the tail
//     // in that case the right node next is still just null which can be store and appended later

//     // also need to check the values for 
    
//     let left_current = head; // traversing linked lists to get left and right 
//     let left_previous = null;
//     let right_current = head; 
//     let right_next = null; 
//     while(left_current.val !== left){
//         //traverse 
//         left_previous = left_current;
//         left_current = left_current.next;
//      }
//     // store left here 
//     let left_node = left_current; 

//     // store left.previous here

//     while(right_current.val !== right) {
//         // traverse 
//         right_current = right_current.next;
//         right_next = right_current.next; // store the next value
//     }

//     // store right
//     let right_node = right_current; 


//     let current = left_node; 
//     let previous = left_previous;

//     // apply the reverse
//     while(current !== right_node){
//         let next = current.next; 
//         current.next = previous; 
//         previous = current;
//         current = next; 
//     }

//     left_node.next = right_next;
    
    
// };

// left and right are indices and not node values
function reverseBetween(head, left, right) {
    if(!head || left == right) return head; 

    let current = head, previous = null; 
    let position = 1; 

    while(position <= left){
        previous = current; 
        current = current.next; 
        position++;
    }

    let left_previous = previous; 
    let left_node = current;

    while(position <= right){
        let next = current.next; 
        current.next = previous;
        previous = current; 
        current = next; 
        position++;
    }

    // connect the start of the sublist to the node after 'right'
    left_node.next = current; 


    // if left_previous is null, it means left was at the head
    if(left_previous !== null){
        left_previous.next = previous;
    }
    else{
        head = previous;
    }

    return head;

}



var firstNode = new ListNode(1, null);
var secondNode = new ListNode(2, null);
var thirdtNode = new ListNode(3, null);
var fourthNode = new ListNode(4, null);
var fifthtNode = new ListNode(5, null);

firstNode.next = secondNode;
secondNode.next = thirdtNode;
thirdtNode.next = fourthNode;
fourthNode.next = fifthtNode;

console.log(reverseBetween(firstNode, 2, 4));


