/**
 * Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}
 

Test case format:

For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

 */
function Node(val, neighbors){
    this.val = val; 
    this.neighbors = neighbors === undefined ? [] : neighbors;
}

var cloneGraph = function(node) {
    // basic check 
    if (!node) return null;
    
    // keep track of visited nodes and cloned 
    // Also to make sure that you are not looping if the conncected 
    // graph has overlapping neighbours 
    const visited = new Map();

    // Create a queue for BFS
    // Queue to bfs neighbours and connect the cloned graph with neighbours
    // at each 
    const queue = [node];

    // Create a clone of the given node
    const cloneNode = new Node(node.val);
    visited.set(node, cloneNode);

    while (queue.length > 0) {
        const currentNode = queue.shift();

        for (const neighbor of currentNode.neighbors) {
            if (!visited.has(neighbor)) {
                // Create a clone of the neighbor and add it to the queue
                const neighborClone = new Node(neighbor.val);
                visited.set(neighbor, neighborClone);
                queue.push(neighbor);

                // Add the neighbor clone to the cloned node's neighbors
                visited.get(currentNode).neighbors.push(neighborClone);
            } else {
                // The neighbor has already been visited, so just add it to the cloned node's neighbors
                visited.get(currentNode).neighbors.push(visited.get(neighbor));
            }
        }
    }

    return cloneNode;
};

// Test the solution
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];

const clonedGraph = cloneGraph(node1);

// Print the cloned graph (you can implement a function to display it)
console.log(clonedGraph.val, clonedGraph.neighbors);