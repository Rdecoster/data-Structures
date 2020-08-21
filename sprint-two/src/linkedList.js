var LinkedList = function() {
  var list = {};
  list.head = null;
  // would be and address starting with list.node.value = value of tail
  list.tail = null;
  // list.node.next.next.value


  // {
  //  head: {value: 1, next: null} ,
  //  tail: {value:3 , next: { value:2, next: { value: 1 , next: null }   } }
  //  }


  list.addToTail = function(value) {
    var newNode = Node(value);
    // Adding to tail

    // If head is null  assign the value of head to newnode
    // If tail already exist list.tail.next = newnode
    // Assing list.tail to the value of the new node.


    if (list.head === null) {

      list.head = newNode;
    }

    if (list.tail !== null) {
      list.tail.next = newNode;
    }
    list.tail = newNode;

  };



  list.removeHead = function() {
    var oldHead = list.head.value;
    list.head = list.head.next;
    return oldHead;
  };

  list.contains = function(target) {
    // need to iterate through the list. through recursion
    // Start iterating through list head.
    // evalualte the value if matches target return ture;

    // check value in the first position if no matches need to go to the next. if no matches reapeate.

    // untill we reacch tail.
    //
    var nodeSearch = function (node) {

      if (node.value === target) {

        return true;
      } else if (node.next === null) {

        return false;

      } else {
        return nodeSearch(node.next);
      }

    };
    return nodeSearch(list.head);
  };

  return list;
};
//value is an argument of node.
var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


var newNode = Node();
