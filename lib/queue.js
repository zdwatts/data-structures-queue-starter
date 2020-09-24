// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.length = 0;
        this.front = null;
        this.back = null;
    }

    enqueue(input) { // Queue: [A <== front, B, C, D <== back]
        let temp = new Node(input);
        if (!this.back) {
            this.front = temp;
            this.back = temp;
        } else if (!this.front.next) {
            this.front.next = temp;
            this.back = temp;
        } else {
            let oldBack = this.back;
            oldBack.next = temp;
            this.back = temp;
        }

        this.length++
        return this.length;
    }

    dequeue() {
        if (!this.front) return null;
        let oldFront = this.front;
        if (!this.front.next) {
            this.front = null;
            this.back = null;
        } else {
            this.front = this.front.next
        }
        this.length--;
        return oldFront.value;
    }

    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.Queue = Queue;
