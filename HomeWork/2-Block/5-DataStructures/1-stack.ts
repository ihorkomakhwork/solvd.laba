




export class Stack {
    mainStack: number[];
    minStack: number[];
    maxStack: number[];
  
    constructor() {
      this.mainStack = [];
      this.minStack = [];
      this.maxStack = [];
    }
  
    // Push a value onto the stack.
    push(value: number): void {
      // Push the value onto the main stack.
      this.mainStack.push(value);
  
      // Update the minStack and maxStack.
      if (this.minStack.length === 0 || value <= this.getMin()) {
        this.minStack.push(value);
      }
      if (this.maxStack.length === 0 || value >= this.getMax()) {
        this.maxStack.push(value);
      }
    }
  
    // Pop the top element from the stack.
    pop(): void {
      if (this.mainStack.length === 0) {
        throw new Error("Stack is empty.");
      }
  
      const poppedValue = this.mainStack.pop();
  
      if (poppedValue === this.getMin()) {
        this.minStack.pop();
      }
      if (poppedValue === this.getMax()) {
        this.maxStack.pop();
      }
    }
  
    // Get the minimum element in the stack.
    getMin(): number {
      return this.minStack[this.minStack.length - 1];
    }
  
    // Get the maximum element in the stack.
    getMax(): number {
       return this.maxStack[this.maxStack.length - 1];
    }    
    

    public peek(): any {
        return this.mainStack[this.mainStack.length - 1];
    }
    
    public isEmpty(): boolean {
        return this.mainStack.length === 0;
    }

    public print(phraze: string): void {
        console.log(phraze + this.mainStack.toString());
    }
}