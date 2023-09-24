export class LinkedList<T> {
    element: T | null = null;
    next: LinkedList<T> | null = null;
    constructor() {}
    
    insert(element: T): void {
        if (this.element === null) {
            this.element = element;
            return;
        } ; 
        
        if (this.next === null) {
            this.next = new LinkedList<T>()  
        }
        this.next.insert(element);
    };

    hasCycle(): boolean {
        let slow: any = this;
        let fast: any = this;

        while (fast !== null && fast.next !== null) {
            slow = slow.next!;
            fast = fast.next.next!;

            if (slow === fast) {
                return true;
            }
        }

        return false;
    }

    delete(element: T): void {
        if (this.element === element) {
            this.element = this.next?.element || null;
            this.next = this.next?.next || null;
            return;
        }
        if (this.next === null) {
            return;
        }
        this.next.delete(element);
    }

    find(element: T): boolean {
        if (this.element === element) {
            return true;
        }
        if (this.next === null) {
            return false;
        }
        return this.next.find(element);
    }
};  