// HashSet implementation in JavaScript.

//

var HashSet = (function () {
    var _items = {};

    function HashSet() {
        this.addItem = addItem;
        this.removeItem = removeItem;
        this.generateHash = generateHash;
        this.getItems = getItems;
    }

    function getItems() {
        return _items;
    }

    function addItem(item) {
        var key = generateHash(item);

        if (key !== undefined) {
            _items[key] = item;
        }
    }

    function removeItem(item) {
        var key = generateHash(item);

        if (key !== undefined) {
            delete _items[key];
        }
    }

    function generateHash(item) {
        var hash = 0;
        var char;
        var itemKey = item.toString();

        if (itemKey.length === 0) {
            return undefined;
        }

        for (var i = 0; i < itemKey.length; i++) {
            char = itemKey.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;

            // Convert to 32bit integer
            hash |= 0;
        }

        return hash;
    }

    return HashSet;
}());
