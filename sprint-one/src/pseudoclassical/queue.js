var Queue = function() {

  this.start = 0;
  this.end = 0;
  this.storage = {};
};

Queue.prototype.dequeue = function() {
  if (this.size() === 0) {
    return undefined;
  }
  this.start++;
  var removed = this.storage[this.start];
  delete this.storage[this.start];
  return removed;
};

Queue.prototype.enqueue = function(value) {
  this.end++;
  this.storage[this.end] = value;
};

Queue.prototype.size = function () {
  return this.end - this.start;
};


newQueue = new Queue();
console.log(newQueue, 'pseduclasiical QUEUE');