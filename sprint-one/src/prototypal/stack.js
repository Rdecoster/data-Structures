
// had to change my variables names to counter

var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.counter = 0;
  newStack.storage = {};
  return newStack;
};


stackMethods = {};

stackMethods.push = function(value) {
  this.counter++;
  this.storage[this.counter] = value;
};

stackMethods.pop = function() {

  if (this.counter === 0) {
    return undefined;
  }
  var popped = this.storage[this.counter];
  delete this.storage[this.counter];
  this.counter--;
  return popped;
};

stackMethods.size = function() {
  return this.counter;
};


var newStack = Stack();
console.log(newStack, 'proto');