class Queue {

  constructor() {
    this.start = 0;
    this.end = 0;
    this.storage = {};
  }

  dequeue () {
    if (this.size() === 0) {
      return undefined;
    }
    this.start++;
    var removed = this.storage[this.start];
    delete this.storage[this.start];

    return removed;

  }

  enqueue (value) {
    this.end++;
    this.storage[this.end] = value;
  }

  size () {
    return this.end - this.start;
  }

}
newQueuees6 = new Queue();
console.log(newQueuees6, 'ES6 queue');
