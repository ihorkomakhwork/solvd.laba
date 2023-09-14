// Define a TreeNode class to represent individual nodes in the binary tree.
 class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
  
    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  

// Define the BinaryTree class to implement the binary tree data structure.
export  class BinaryTree {
    root: TreeNode | null;
  
    constructor() {
      this.root = null;
    }
  
    // Method to insert a new node with the given value into the binary tree.
    insert(value: number): void {
      const newNode = new TreeNode(value);
  
      if (!this.root) {
        // If the tree is empty, set the new node as the root.
        this.root = newNode;
      } else {
        // Otherwise, recursively insert the node into the appropriate subtree.
        this.insertNode(this.root, newNode);
      }
    }
  
    // Private helper method for inserting a node recursively.
    private insertNode(currentNode: TreeNode, newNode: TreeNode): void {
      if (newNode.value < currentNode.value) {
        // If the new value is less than the current node's value, move to the left subtree.
        if (!currentNode.left) {
          // If there's no left child, insert the new node here.
          currentNode.left = newNode;
        } else {
          // Otherwise, continue the insertion process in the left subtree.
          this.insertNode(currentNode.left, newNode);
        }
      } else {
        // If the new value is greater or equal, move to the right subtree.
        if (!currentNode.right) {
          // If there's no right child, insert the new node here.
          currentNode.right = newNode;
        } else {
          // Otherwise, continue the insertion process in the right subtree.
          this.insertNode(currentNode.right, newNode);
        }
      }
    }
  
    // Method to search for a node with the given value in the tree.
    search(value: number): TreeNode | null {
      return this.searchNode(this.root, value);
    }
  
    // Private helper method for searching for a node recursively.
    private searchNode(currentNode: TreeNode | null, value: number): TreeNode | null {
      if (!currentNode || currentNode.value === value) {
        return currentNode;
      }
  
      if (value < currentNode.value) {
        return this.searchNode(currentNode.left, value);
      } else {
        return this.searchNode(currentNode.right, value);
      }
    }
  
    // Method to perform an in-order traversal of the tree and execute a callback function for each node.
    inOrderTraversal(callback: (value: number) => void): void {
      this.inOrder(this.root, callback);
    }
  
    // Private helper method for in-order traversal.
    private inOrder(node: TreeNode | null, callback: (value: number) => void): void {
      if (node) {
        this.inOrder(node.left, callback);
  
        callback(node.value);
  
        this.inOrder(node.right, callback);
      }
    }
  
    // Method to perform a pre-order traversal of the tree and execute a callback function for each node.
    preOrderTraversal(callback: (value: number) => void): void {
      this.preOrder(this.root, callback);
    }
  
    // Private helper method for pre-order traversal.
    private preOrder(node: TreeNode | null, callback: (value: number) => void): void {
      if (node) {
        // Execute the callback function for the current node.
        callback(node.value);
        this.preOrder(node.left, callback);
        this.preOrder(node.right, callback);
      }
    }
  
    // Method to perform a post-order traversal of the tree and execute a callback function for each node.
    postOrderTraversal(callback: (value: number) => void): void {
      this.postOrder(this.root, callback);
    }
  
    // Private helper method for post-order traversal.
    private postOrder(node: TreeNode | null, callback: (value: number) => void): void {
      if (node) {
        this.postOrder(node.left, callback);
        this.postOrder(node.right, callback);
        callback(node.value);
      }
    }
  
    
    // Function to check if the binary tree is a BST.
    isBST(): boolean {
      return this.isBSTUtil(this.root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    }
  
    // Utility function for checking if a binary tree is a BST.
    private isBSTUtil(node: TreeNode | null, min: number, max: number): boolean {
      if (node === null) {
        // An empty tree is considered a BST.
        return true;
      }
  
      // Check if the current node's value is within the valid range.
      if (node.value < min || node.value > max) {
        return false;
      }
  
      // Recursively check the left and right subtrees.
      return (
        this.isBSTUtil(node.left, min, node.value - 1) && // Left subtree should have values less than the current node.
        this.isBSTUtil(node.right, node.value + 1, max) // Right subtree should have values greater than the current node.
      );
    }
}
  
