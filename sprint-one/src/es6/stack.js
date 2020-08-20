class Stack {

  constructor() {
    this.counter = 0;
    this.storage = {};
  }
  push (value) {
    this.counter++;
    this.storage[this.counter] = value;
  }

  pop () {

    if (this.counter === 0) {
      return undefined;
    }
    var popped = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter--;
    return popped;

  }
  size () {
    return this.counter;
  }

}

var es6Stack = new Stack;
console.log(es6Stack, 'ES6 stack');