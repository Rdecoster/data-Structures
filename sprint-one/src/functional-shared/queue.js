var Queue = function() {

  var newInstance = {};
  newInstance.start = 0;
  newInstance.end = 0;
  newInstance.storage = {};

  extened(newInstance, queueMethods);
  return newInstance;
};

var extened = function(desination, target) {
  for ( var keys in target) {
    desination[keys] = target[keys];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end++;
};

queueMethods.dequeue = function () {
  if (this.size() === 0) {
    return undefined;
  }
  var removed = this.storage[this.start];
  this.start++;
  delete this.storage[this.start];

  return removed;
};

queueMethods.size = function () {
  return this.end - this.start;
};


var newInstanceShared = Queue();
console.log(newInstanceShared);