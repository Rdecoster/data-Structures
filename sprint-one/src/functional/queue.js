var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage.start = 0;
  storage.end = 0;

  someInstance.enqueue = function(value) {

    storage[storage.end] = value;
    storage.end++;
  };

  someInstance.dequeue = function() {
    if (someInstance.size() === 0) {
      return undefined;
    }
    var dequeue = storage[storage.start];
    delete storage[storage.start];
    storage.start++;
    return dequeue;
  };

  someInstance.size = function() {
    return storage.end - storage.start;
  };

  return someInstance;
};
