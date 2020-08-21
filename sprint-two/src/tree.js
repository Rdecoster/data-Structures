var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  // extended tree method
  _.extend(newTree, treeMethods);
  // created an array to hold child treee nodes

  newTree.children = []; // [{},{}]

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create new child node using the Tree class
  var childNode = Tree(value);
  // passing the value argument to new childnode
  this.children.push(childNode);
  // pushing the child node to the children Array

};

treeMethods.contains = function(target) {
  // check current value if matches target
  if (this.value === target) {
    return true;
  }
  //have to check newTree has a children in Array[]
  if ( this.children.length >= 0) {
    //go to each child to check what value child has iterate through
    // if no current value check children Array exists
    for (var i = 0; i < this.children.length; i += 1) {
      if (this.children[i] === target) {
        return true;
      }
      if ( this.children[i].children === !undefined) {
        return treeMethods.contans(this.children[i].children);
      }
    }
  }

  return false;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
