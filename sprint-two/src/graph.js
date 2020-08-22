

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {};
  newNode.value = node;
  newNode.edges = {};

  return this.storage[node] = newNode; //   x in this.storage -> x.edges
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // access storagecon
  this.storage[node];

  // if our node is present instorage if present return true
  if (this.storage[node]) {
    return true;
  } else { return false; }
  //
  // if not present return false

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  this.forEachNode((checkNodes)=> {
    console.log(this,"this");

    this.removeEdge(checkNodes, node);

    console.log(this,"this after");
  });
  // delete note which is required
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  //first evaluete the Node exist using our built function
  if (this.contains(fromNode) && this.contains(toNode)) {
    if (this.storage[fromNode].edges[toNode] && this.storage[toNode].edges[fromNode]) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
// add in only one direction ?
//
  if (this.contains(fromNode, toNode) || this.contatins(toNode, fromNode)) {
    this.storage[fromNode].edges[toNode] = toNode;
    this.storage[toNode].edges[fromNode] = fromNode;
  }

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  // if (this.hasEdge(fromNode) === true || this.hasEdge(toNode) === true) {

  delete this.storage[fromNode].edges[toNode];
  delete this.storage[toNode].edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.storage, (key)=> {
    //console.log(key.value);
    cb(key.value);
  });




  // We need to iterate through the entire graph.
  // Our graph is an object that holds our does that are stored in the storage object.

  // for ( var keys in this.storage) {
  //   console.log(keys);
  //   cb(keys);
  // }
  // possible to use either a for in look to iterate accrosse the key values (nodes)
  // at each node initiate call back function.
  // cd(arugment);
};

