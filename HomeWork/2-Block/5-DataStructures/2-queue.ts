import { Stack } from './1-stack';

export class Queue {
    private main = new Stack();
    private chache  = new Stack();

    public enqueue(item): void {
            while(!this.main.isEmpty()) {
                this.chache.push(this.main.pop() as any);
            } 
            this.main.push(item);
            while(!this.chache.isEmpty()) {
                this.main.push(this.chache.pop() as any);
            }
    }
    
    public dequeue() {
        return this.main.pop();
    }
    
    public isEmpty(): boolean {
        return this.main.isEmpty();
    }

    public print(phraze: string): void {
        this.main.print(phraze);
    }
}