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
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
