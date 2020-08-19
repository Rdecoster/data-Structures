var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values

  var storage = {};
storage.size = 0;


  // Implement the methods below
  someInstance.push = function(value) {
    storage.size++;
    storage[storage.size] = value;



  };
// remove last key in object and update size
  someInstance.pop = function() {
    var index = storage.size
    var popedValue = storage[index]
    if (storage.size <=0){

      storage.size = 0;
    } else {

      delete storage[storage.size]
      storage.size = storage.size - 1;
    }
  return popedValue;

  };

  someInstance.size = function() {
    return storage.size;
  };

  return someInstance;
};
