/**
 * Heap Data Structure (Priority Queue):
 * Min Heap
 * Has to be a complete binary tree.
 * Value of each internal node is smaller then or equal to the values in the childen of that node
 *
 *  0   1   2   3   4   5   6
 * 13, 16, 31, 41, 51, 100, 115
 *
 * Mapping the elements of a heap into an array is trivial:
 * if a node is stored an index k
 * left child is stored at index 2k+1
 * right child index 2k+2
 *
 *
 *                    13
 *                   /  \
 *                  16   31
 *                 / \   / \
 *               41  51 100 115
 *
 *
 * Assuming we have an array Arr[] as the Min Heap
 * For an ith node
 * Parent Node Arr[(i-1)/2]
 * Left Node Arr[2i + 1]
 * Right Node Arr[2i + 2]
 *
 *
 * or
 * Parent Node Arr[i/2]
 * Left Node Arr [2*i]
 * Right Node Arr [2*i + 1]
 *
 *
 * Operations:
 *
 * Heapify: A process of creating a heap from an array
 *
 * Insertion: Process to insert an element in existing heap time complexity O(log N)
 *
 * Deletion: Deleting the top element of the heap or the highest priority element, and then
 * organising the heap and returning the element with time complexity O(log N)
 *
 * Peek: To check or find the most prior element in the heap, (max or min element for max and min heap)
 *
 *
 *
 */

let MinHeap = function () {
  let heap = [null] // heap list

  this.insert = function (num) {
    heap.push(num) // push it at the end of the list
    // Now we need to check and compare the number to its parent depending on the size of the heap first
    if (heap.length > 2) {
      let idx = heap.length - 1 // this is the index of the new num value pushed onto the heap

      while (heap[idx] < heap[Math.floor(idx / 2)]) {
        if(idx >= 1) {
            [heap[Math.floor(idx / 2)], heap[idx]] = [[heap[idx]],heap[Math.floor(idx / 2)]]
            if (Math.floor(idx / 2) > 1) {
                idx = Math.floor(idx / 2)
            } else {
                break;
            }
        }   // new index is the parent as they have swapped the values and now smaller values keep going up until the parent is larger
      }
    }
  }

  this.remove = function () {
    let smallest = heap[1] // saving the smallest value
    if (heap.length > 2) {
      // removing the last value - as this will become the top of the heap for now
      heap[1] = heap[heap.length - 1]
      // we bring the last value to the top of the heap and re-evaluate the heap to balance it
      heap.splice(heap.length - 1)
      if (heap.length === 3) {
        if (heap[1] > heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]] // swap them as the condition for the min heap is required
        }
        return smallest // smallest points to heap[1]
      }

      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;

      while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
        if (heap[left] < heap[right]) {
          [heap[i], heap[left]] = [heap[left], heap[i]]
          i = 2 * i
        } else {
          [heap[i], heap[right]] = [heap[right], heap[i]]
          i = 2 * i + 1
        }
        left = 2 * i
        right = 2 * i + 1
        if (heap[left] === undefined || heap[right] === undefined) {
          break
        }
      }
    } else if (heap.length == 2) {
      heap.splice(1, 1)
    } else {
      return null;
    }
    return smallest;
  }; 

  this.sort = function() {
    let result = new Array(); 
    while(heap.length > 1){
        result.push(this.remove());
    }; 
    return result; 
  }
}


let heap = new MinHeap(); 

heap.insert(20); 
heap.insert(19); 
heap.insert(17); 
heap.insert(13); 
heap.insert(15); 
heap.insert(8); 
heap.insert(5); 
heap.insert(11); 
heap.insert(9);
heap.insert(10); 

