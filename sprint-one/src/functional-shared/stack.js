
  var Stack = function() {


    var newInstance = {}
   newInstance.storage = {};
   newInstance.storage.size = 0;

   // using underscore to extend the methoids
  //  _.extend(newInstance, stackMethods)
 extend(newInstance, stackMethods)
   // returns  instance as the object we are re-creating
  return newInstance;
  };
  var extend = function(destination, target){
    for(var key in target){
      destination[key] = target[key]
    }
  }

  // we write our functional shared methoids directily into the stackmethoid object. not using . notation to add in
  var stackMethods = {}


  stackMethods.size = function() {
    return  this.storage.size;

  }

  stackMethods.pop =function(){
    if (this.storage.size === 0){
      return undefined
    }
    var popped = this.storage[this.storage.size];
    delete this.storage[this.storage.size]
    this.storage.size--;
    console.log(this.storage.size)
    return popped;


  }

  stackMethods.push = function(value){
    this.storage.size++;
    this.storage[this.storage.size] = value;

  }

  var newStack = Stack()
  console.log(newStack,"new stack")