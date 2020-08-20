var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.start = 0;
  this.end = 0;
  this.storage={};
};





Queue.prototype.dequeue = function(){
  if (this.size() === 0){
    return undefined
  }
  this.start++
  var removed = this.storage[this.start];
  delete this.storage[this.start];

  return removed

}

Queue.prototype.enqueue = function(value) {
  this.end++;
  this.storage[this.end] = value;
}

Queue.prototype.size = function () {
  return this.end - this.start

}


newQueue = new Queue()
console.log(newQueue,"pseduclasiica QUEUE")