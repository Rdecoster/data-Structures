var Stack = function() {
  this.counter = 0;
  this.storage = {};
};

Stack.prototype.size = function() {
  return this.counter;
};

Stack.prototype.pop = function() {
  if (this.counter === 0) {
    return undefined;
  }
  var popped = this.storage[this.counter];
  delete this.storage[this.counter];
  this.counter--;
  return popped;

};

Stack.prototype.push = function(value) {
  this.counter++;
  this.storage[this.counter] = value;
};

var psdoClass = new Stack();
console.log(psdoClass, 'Stack pseudoClassical');

