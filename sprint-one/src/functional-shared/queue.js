var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var newInstance = {}
newInstance.start = 0;
newInstance.end = 0;
newInstance.storage ={}

extened(newInstance,queueMethods);

return newInstance

};

var extened = function(desination, target) {
  for ( var keys in target){
    desination[keys] = target[keys]
  }
};
var queueMethods = {};


queueMethods.enqueue = function(value) {
this.end++;
this.storage[this.end] = value;

}

queueMethods.dequeue = function () {
  if (this.size() === 0){
    return undefined
  }
  this.start++
  var removed = this.storage[this.start];
  delete this.storage[this.start];

  return removed

}

queueMethods.size = function () {
  return this.end - this.start
}


var newInstanceShared = Queue()
console.log(newInstanceShared)