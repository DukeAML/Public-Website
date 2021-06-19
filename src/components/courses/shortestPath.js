import PriorityQueue from './PriorityQueue';

/*
An implementation of Djisktra's shortest path algorithm to find the
shortest path between two courses in the graph.

Takes as arguments the id of the start and end nodes,
the adjacencies of all nodes in the graph (data.adjacencies as
imported from Data.js), and the list of edges.

All nodes are referened to by their id property.
*/

export default function shortestPath(start, end, nodes, edges) {
  /*
  let distances = {};

  // Stores the reference to previous nodes
  let prev = {};
  let pq = new PriorityQueue(nodes.length * nodes.length);

  // Set distances to all nodes to be infinite except startNode
  distances[start] = 0;
  pq.push(start, 0);
  Object.keys(nodes).forEach(node => {
    if (node !== start) distances[node] = Infinity;
    prev[node] = null;
  });

  while (!pq.isEmpty()) {
    console.log(edges);
    let minNode = pq.pop();
    let currNode = minNode;
    edges[currNode].forEach(neighbor => {
      // "Weight" of each edge = 1
      let alt = distances[currNode] + 1;
      if (alt < distances[neighbor.node]) {
        distances[neighbor.node] = alt;
        prev[neighbor.node] = currNode;
        pq.enqueue(neighbor.node, distances[neighbor.node]);
      }
    });
  }
  return distances;
  */
}
