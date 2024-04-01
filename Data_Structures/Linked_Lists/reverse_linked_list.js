// Definition of singly-linked list
function ListNode(val, next) {
  this.val = val === undefined ? null : val;
  this.next = next === undefined ? null : next;
}

// const reverseLinkedList = (head) => {
//     let current = head;
//     let prev = null; // current previous value
//     while(current !== null){
//         const next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//     }

//     return prev;
// }

// const reverseLinkedList = (head, prev = null) => {
//   if (head === null) return prev;
//   const next = head.next;
//   head.next = prev;
//   return reverseLinkedList(next, head);
// };

// const a = new Node("A");
// const b = new Node("B");
// const c = new Node("C");
// const d = new Node("D");

// a.next = b;
// b.next = c;
// c.next = d;

// reverseLinkedList(a);

// let current = reverseLinkedList(a);

// console.log(reverseLinkedList(d));

// while (current !== null) {
//   console.log(current.val, "->");
//   current = current.next;
// }

/*
 * @param {ListNode}
 * @return {ListNode}
 */

var reverseList = function (head) {
  var current = head;
  var previous = null;
  // move to the next until current is null so that we can make changes to the pointers
  // until last value
  while (current !== null) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
};

var firstNode = new ListNode(1, null);
var secondNode = new ListNode(2, null);
var thirdtNode = new ListNode(3, null);
var fourthNode = new ListNode(4, null);
var fifthtNode = new ListNode(5, null);

firstNode.next = secondNode;
secondNode.next = thirdtNode;
thirdtNode.next = fourthNode;
fourthNode.next = fifthtNode;

let reversedListHead = reverseList(firstNode);

let current = reversedListHead;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}