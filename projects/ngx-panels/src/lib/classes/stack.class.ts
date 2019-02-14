

export class Stack<T> {
    private elements: T[] = [];
    pop(): T {
        return this.elements.pop();
    }

    peek(): T {
        return this.elements[this.elements.length - 1];
    }

    push(element: T) {
        this.elements.push(element);
    }

    size() {
        return this.elements.length;
    }

    empty() {
        this.elements = [];
    }

    getAll() {
        return [...this.elements];
    }
}
