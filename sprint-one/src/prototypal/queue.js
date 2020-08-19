var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods)
  newQueue.start = 0;
  newQueue.end =0;
  newQueue.storage ={};
  return newQueue;
};

var queueMethods = {};

queueMethods.size = function () {
  return this.end - this.start
}

queueMethods.enqueue = function(value) {
    this.end++;
    this.storage[this.end] = value;
}

queueMethods.dequeue = function() {
  if (this.size() === 0){
    return undefined
  }
  this.start++
  var removed = this.storage[this.start];
  delete this.storage[this.start];

  return removed

}

var protoQueue = Queue()
console.log(protoQueue, "proto Q")