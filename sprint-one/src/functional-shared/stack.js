
  var Stack = function() {


    var newInstance = {}
   newInstance.storage = {};
   newInstance.storage.size = 0;

   // using underscore to extend the methoids
  //  _.extend(newInstance, stackMethods)
 extend(newInstance, stackMethods)
   // returns this instance as the object we are re-creating
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
    console.log(this)
  }

  stackMethods.pop =function(){

  }

  stackMethods.push = function(value){

  }

  var newStack = Stack()
  console.log(newStack,"new stack")