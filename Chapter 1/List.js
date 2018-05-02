/**
 * dfasdf
 */
export class Node {
    /**
     *
     * @param {*} item
     */
    constructor(item, next = null) {
        this.item = item;
        this.next = next;
    }
}

class List {
    first = null;
    N = 0;
    size() {
        return this.N;
    }
    isEmpty() {
        return this.first === null;
    }
    pop() {
        const item = this.first.item;
        this.first = this.first.next;
        this.N--;
        return item;
    }
}

export class Stack extends List {
    first = null;
    push(item) {
        const oldfirst = this.first;
        const first = new Node(item);
        first.next = oldfirst;
        this.N++;
        this.first = first;
    }
}

export class Queue extends List {
    last = null;
    isEmpty() {
        return this.first === null;
    }
    enqueue(item) {
        const oldlast = this.last;
        const last = new Node(item);
        this.N++;
        if (this.isEmpty()) {
            this.first = last;
        } else {
            oldlast.next = last;
        }
        this.last = last;
    }
    dequeue() {
        const item = this.pop();
        if (this.isEmpty()) {
            this.last = null;
        }
        return item;
    }
}
