

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// k = steven, v = segal in the example
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // check to see of our bucket excist at the index

  // Should try to push set(index,v) to this._storage

  this._storage.set(index, v);

  var stroageInArr = this._storage.get(index);
  console.log(stroageInArr, 'storage at inde');

  // if it excist check to see if key already excist and if match if not over write key with new value
  // if key does not excist in bucket add key value pair

  // push tuple into bucket.



};

HashTable.prototype.retrieve = function(k) {

  var index = getIndexBelowMaxForKey(k, this._limit);

  return this._storage.get(index);
};





HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  /* key, index form our hash function, access to index using the foreach method */

  // invoke eachfunction using a callback on the bucket
  this._storage.each((keys, i, storage) => {
    // console.log(keys, i, '!!!!KEYS!!!!');
    console.log(storage[i], i, 'Storage');
    // if ( keys === k) {
    //
    // }
    // console.log(keys, "keys variable")
    // console.log(k, "value k")

    storage.splice(i, 1); //storage[i].splice(i,1);

  });
};

//   }
//  * Complexity: What is the time complexity of the above functions?
//  */
