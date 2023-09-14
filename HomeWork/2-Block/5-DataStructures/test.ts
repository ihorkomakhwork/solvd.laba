import { Queue } from './2-queue';
import { LinkedList } from './5-linkedList';
import { Stack } from './1-stack';
import { BinaryTree } from './3-binaryTree';
import { Graph, GraphAlgo } from './4-graph';

{
    //=================================================
    console.log('\n');
    const stack = new Stack();
    stack.push(3);
    stack.push(5);
    stack.push(2);
    stack.push(7);

    console.log('Minimum:', stack.getMin()); // Output: Minimum: 2
    console.log('Maximum:', stack.getMax()); // Output: Maximum: 7

    console.log('');

    stack.pop();

    console.log('Minimum after pop:', stack.getMin()); // Output: Minimum after pop: 2
    console.log('Maximum after pop:', stack.getMax()); // Output: Maximum after pop: 5
    console.log('\n');
    //=================================================
}

{
    //=================================================
    console.log('\n');
    const tree = new BinaryTree();
    tree.insert(50);
    tree.insert(30);
    tree.insert(70);
    tree.insert(20);
    tree.insert(40);
    tree.insert(60);
    tree.insert(80);
    
    console.log('Is the tree a Binary Search Tree (BST)?', tree.isBST()); // Output: true

    console.log('In-order traversal:');
    tree.inOrderTraversal((value) => console.log(value));
    
    console.log('Pre-order traversal:');
    tree.preOrderTraversal((value) => console.log(value));
    
    console.log('Post-order traversal:');
    tree.postOrderTraversal((value) => console.log(value));
    
    const searchResult = tree.search(40);
    if (searchResult) {
        console.log('Found 40 in the tree.');
    } else {
        console.log('40 not found in the tree.');
    }
    console.log('\n');
    //=================================================
}

{

    //=================================================
    console.log('\n');


    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    
    
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'E');
    
    console.log('Depth-First Search (DFS): \n');
    graph.dfs('A', (vertex) => console.log(vertex));
    console.log('');
    console.log('Breadth-First Search (BFS): \n');
    graph.bfs('A', (vertex) => console.log(vertex));
    
    const graphAlgo = new GraphAlgo({
        'A': ['B', 'C'],
        'B': ['A', 'C', 'D'],
        'C': ['A', 'B', 'D'],
        'D': ['B', 'C']
      });
      
      const startVertex = 'A';
      const endVertex = 'D';
      
      console.log('');
      console.log('Shortest path from A to D using Dijkstra\'s algorithm:');
      console.log(graphAlgo.dijkstra(startVertex, endVertex));
      
      console.log('');
      console.log('Shortest path from A to D using BFS:');
      console.log(graphAlgo.bfs(startVertex, endVertex));
      console.log('\n');
}


{
   //=================================================
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.print('Queue: ');
    console.log('Dequeue: ' + queue.dequeue());
    queue.print('Queue: ');

    //=================================================
}

{
    //=================================================

    const list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);
    
    list.delete(2);
    list.delete(1);

    console.log(list.find(1));
    console.dir(list, { depth: null });

    //=================================================
}