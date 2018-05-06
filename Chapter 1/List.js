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
    [Symbol.iterator]() {
        let node = this.first;
        return {
            next: function() {
                let done = !node.next;
                const oldnode = node;
                if (!done) {
                    node = node.next;
                }
                return {
                    value: oldnode.item,
                    done,
                };
            },
        };
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
    [Symbol.iterator]() {
        let node = this.first;
        return {
            next: function() {
                let done = !node.next;
                const oldnode = node;
                if (!done) {
                    node = node.next;
                }
                return {
                    value: oldnode.item,
                    done,
                };
            },
        };
    }
}

class DoubleNode {
    constructor(item, pre = null, next = null) {
        this.item = item;
        this.pre = item;
        this.next = item;
    }
}

class DoubleList {
    first = null;
    last = null;
    N = 0;
    isEmpty() {
        return this.N === 0;
    }
    /**
     * 表头插入
     * @param {any} item
     */
    unshfit(item) {
        const node = new DoubleNode(item, null, this.first);
        this.first = node;
        if (this.isEmpty()) {
            this.last = node;
        }
        return ++this.N;
    }
    /**
     * 表位插入
     * @param {any} item
     */
    push(item) {
        const node = new DoubleNode(item, this.last, null);
        this.last = node;
        if (this.isEmpty()) {
            this.first = node;
        }
        return ++this.N;
    }
    /**
     * 表头删除
     */
    shift() {
        if (this.first) {
            const item = this.first.item;
            this.first = this.first.next;
            return item;
        } else {
            return void 0;
        }
    }
    // 从表尾删除
    pop() {
        if (this.last) {
            const item = this.last.item;
            this.last = this.last.pre;
            return item;
        } else {
            return void 0;
        }
    }

    insertBefore() {}
    insertAfter() {}
    remove(item) {}
}
