class Queues<T> {
    private items: T[] = [];

    enqueue(element: T): void {
        this.items.push(element);
    }

    dequeue(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.shift();
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    length(): number {
        return this.items.length;
    }
}

var queue1 = new Queues<number>();
var queue2 = new Queues<string>();

queue1.enqueue(10);
queue1.enqueue(20);
queue1.enqueue(30);

console.log(queue1.dequeue());   
console.log(queue1.length());

queue2.enqueue("10");
queue2.enqueue("20");
queue2.enqueue("30");

console.log(queue2.dequeue());   
console.log(queue2.length());