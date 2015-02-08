// HashSet implementation in JavaScript.

// Internally uses an implementation of a hash map.

var HashSet = (function () {
    function HashSet(items) {
        /* private variables */
        var _items = {};

        /* public methods */

        /**
         * getAll - returns the set.
         */
        this.getAll = function() {
            return _items;
        };

        /**
         * add - adds an item to the hash set
         *
         * @param  {Object} item - the item to add
         * @param  {String} keyId - the key of the object to use as a hash
         * @return {Boolean} success or failure.
         */
        this.add = function(item, keyId) {
            var key = hashCode(item[keyId]);

            if (key !== undefined && _items[key] === undefined) {
                _items[key] = item;
                return true;
            }

            return false;
        };

        /**
         * addAll - adds an array of items to the hash set
         *
         * @param  {Array} items - the items to add
         * @param  {String} keyId - the key of the objects to use as a hash
         */
        this.addAll = function(items, keyId) {
            for (var i = 0; i < items.length; i++) {
                var isAdded = this.add(items[i], keyId);
            }
        };

        /**
         * remove - removes an item from the hash set
         *
         * @param  {Object} item - the item to remove
         * @param  {String} keyId - the key of the object to use as a hash
         * @return {Boolean} success or failure.
         */
        this.remove = function(item, keyId) {
            var key = hashCode(item[keyId]);

            if (key !== undefined) {
                delete _items[keyId];
                return true;
            }

            return false;
        };

        /**
         * size - returns the size of the hash set.
         *
         * @return {int} how many items are in the hash set.
         */
        this.size = function() {
            return Object.keys(_items).length;
        };

        /* private methods */

        /**
         * generateHash - tries to, within reason, generate a random key, this
         * is not guaranteed to be unique.
         *
         * @return {int} hash - a (hopefully) unique hash.
         */
        function hashCode(key) {
            var hash = 0;
            var stringKey = key.toString();

            if (stringKey.length === 0) return hash;

            for (i = 0; i < stringKey.length; i++) {
               char = stringKey.charCodeAt(i);

               hash = ((hash << 5) - hash) + char;

               // Convert to 32bit integer
               hash = hash & hash;
            }

            return hash;
        }

        /* constructor initialise */
        if (items instanceof Array) {
            this.addAll(items);
        }
    }

    return HashSet;
}());

module.exports = HashSet;
