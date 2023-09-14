export class Graph {
    adjacencyList: Map<string, string[]>;
  
    constructor() {
      // Initialize an empty adjacency list using a Map data structure.
      // The keys will be vertices, and the values will be arrays of adjacent vertices.
      this.adjacencyList = new Map();
    }
  
    // Method to add a new vertex to the graph.
    addVertex(vertex: string): void {
      // Check if the vertex already exists in the graph.
      if (!this.adjacencyList.has(vertex)) {
        // If not, add the vertex with an empty array to represent its neighbors.
        this.adjacencyList.set(vertex, []);
      }
    }
  
    // Method to add an undirected edge between two vertices in the graph.
    addEdge(vertex1: string, vertex2: string): void {
      // Check if both vertices exist in the graph.
      if (!this.adjacencyList.has(vertex1) || !this.adjacencyList.has(vertex2)) {
        throw new Error("Both vertices must exist in the graph.");
      }
  
      // Add each vertex to the other's list of neighbors.
      this.adjacencyList.get(vertex1)!.push(vertex2);
      this.adjacencyList.get(vertex2)!.push(vertex1);
    }
  
    // Method to perform Depth-First Search (DFS) on the graph.
    dfs(startVertex: string, callback: (vertex: string) => void): void {
      const visited: Set<string> = new Set();
  
      // Recursive helper function to explore vertices in DFS.
      const dfsRecursive = (vertex: string) => {
        // Mark the current vertex as visited.
        visited.add(vertex);
  
        // Execute the callback function for the current vertex.
        callback(vertex);
  
        // Visit all neighbors of the current vertex that have not been visited.
        for (const neighbor of this.adjacencyList.get(vertex)!) {
          if (!visited.has(neighbor)) {
            dfsRecursive(neighbor);
          }
        }
      };
  
      // Start DFS from the provided startVertex.
      dfsRecursive(startVertex);
    }
  
    // Method to perform Breadth-First Search (BFS) on the graph.
    bfs(startVertex: string, callback: (vertex: string) => void): void {
      const visited: Set<string> = new Set();
      const queue: string[] = [];
  
      // Mark the start vertex as visited and enqueue it.
      visited.add(startVertex);
      queue.push(startVertex);
  
      while (queue.length > 0) {
        // Dequeue a vertex from the queue and execute the callback function.
        const currentVertex = queue.shift()!;
        callback(currentVertex);
  
        // Visit all neighbors of the current vertex that have not been visited.
        for (const neighbor of this.adjacencyList.get(currentVertex)!) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
    }
  }
  

export class GraphAlgo {
  constructor(private adjacencyList: { [vertex: string]: string[] }) {
    this.adjacencyList = adjacencyList;
  }

    dijkstra(start: string, end: string): number {
      // Initialize the distances to all vertices as infinity.
      const distances: { [vertex: string]: number } = {};
      for (const vertex in this.adjacencyList) {
        distances[vertex] = Infinity;
      }
  
      // Set the distance to the start vertex to 0.
      distances[start] = 0;
  
      // Create a priority queue to store the vertices that have not yet been processed.
      const queue: { [vertex: string]: number } = {};
      for (const vertex in this.adjacencyList) {
        queue[vertex] = Infinity;
      }
  
      // While the queue is not empty, remove the vertex with the minimum distance from the queue and process it.
      while (queue.size > 0) {
        // Get the vertex with the minimum distance from the queue.
        const currentVertex = Object.keys(queue)[0];
        delete queue[currentVertex];
  
        // For each neighbor of the current vertex, update its distance if the distance through the current vertex is shorter.
        for (const neighbor of this.adjacencyList[currentVertex]) {
          const newDistance = distances[currentVertex] + 1;
          if (newDistance < distances[neighbor]) {
            distances[neighbor] = newDistance;
          }
        }
      }
  
      // Return the distance from the start vertex to the end vertex.
      return distances[end];
    }
     // BFS to find the shortest path between two vertices.
     bfs(start: string, end: string): string[] {
      // Initialize a set to track the visited vertices.
      const visited: Set<string> = new Set();
  
      // Create a queue to store the vertices that need to be visited.
      const queue: string[] = [];
  
      // Add the start vertex to the queue.
      queue.push(start);
  
      // While the queue is not empty, remove the next vertex from the queue and process it.
      while (queue.length > 0) {
        // Get the next vertex from the queue.
        const currentVertex: any = queue.shift();
  
        // If the current vertex is the end vertex, return the shortest path.
        if (currentVertex === end) {
          return [currentVertex];
        }
  
        // Mark the current vertex as visited.
        visited.add(currentVertex);
  
        // For each neighbor of the current vertex, add it to the queue if it has not been visited yet.
        for (const neighbor of this.adjacencyList[currentVertex]) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        }
      }
  
      // If the end vertex is not reachable from the start vertex, return an empty array.
      return [];
    }
  }

