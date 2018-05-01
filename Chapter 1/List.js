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

export class Stack {
    first = null;
    N = 0;
    isEmpty() {
        return this.first === null;
    }
    size() {
        return this.N;
    }
    push(item) {
        const oldfirst = this.first;
        const first = new Node(item);
        first.next = oldfirst;
        this.N++;
        this.first = first;
    }
    pop() {
        const item = this.first.item;
        this.first = this.first.next;
        this.N--;
        return item;
    }
}
