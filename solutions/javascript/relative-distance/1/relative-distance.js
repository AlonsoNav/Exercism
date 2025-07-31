/**
 * Determine the degrees of separation between two individuals in a family tree.
 * 
 * @param {Object} familyTree - Object where keys are parents and values are arrays of their children
 * @param {string} personA - First person to find the connection for
 * @param {string} personB - Second person to find the connection for
 * @returns {number} - Shortest distance between the two people, or -1 if no connection exists
 */
export const degreesOfSeparation = (familyTree, personA, personB) => {
  const graph = {};
  
  // Initialize all people in the graph
  for (const [parent, children] of Object.entries(familyTree)) {
    if (!graph[parent]) graph[parent] = new Set();
    
    for (const child of children) {
      if (!graph[child]) graph[child] = new Set();
      
      graph[parent].add(child);
      graph[child].add(parent);
    }
  }

  // Handle siblings by adding direct connections
  for (const [parent, children] of Object.entries(familyTree)) {
    if (children.length > 1) {
      for (let i = 0; i < children.length; i++) {
        for (let j = i + 1; j < children.length; j++) {
          graph[children[i]].add(children[j]);
          graph[children[j]].add(children[i]);
        }
      }
    }
  }

  // If either person doesn't exist in the graph, no connection is possible
  if (!graph[personA] || !graph[personB]) {
    return -1;
  }

  // BFS to find the shortest path
  const queue = [[personA, 0]]; // [person, distance]
  const visited = new Set([personA]);

  while (queue.length > 0) {
    const [currentPerson, distance] = queue.shift();
    
    // Check if we've reached the target
    if (currentPerson === personB) {
      return distance;
    }

    // Explore all conections
    for (const connectedPerson of graph[currentPerson]) {
      if (!visited.has(connectedPerson)) {
        visited.add(connectedPerson);
        queue.push([connectedPerson, distance + 1]);
      }
    }
  }

  return -1;
}