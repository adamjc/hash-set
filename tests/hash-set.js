var chai = require('chai');
var should = chai.should();
var HashSet = require('../src/hash-set');

describe('hash-set', function () {
    var hashSet;
    var exampleItem;

    beforeEach(function () {
        hashSet = new HashSet();

        exampleItem = {
            _id: "valueOne",
            someVal: "valueTwo",
            someOtherVal: "valueThree"
        };
    });

    describe('add(item)', function () {
        it('should add an object to the hash set', function () {
            hashSet.add(exampleItem, "_id").should.equal(true);
        });

        it('should not add duplicate objects', function () {
            hashSet.add(exampleItem, "_id").should.equal(true);
            hashSet.add(exampleItem, "_id").should.equal(false);
        });
    });

    describe('addAll(items)', function () {
        it('should add an array of objects to the hash set', function () {
            var items = [{
                _id: 1,
                a: 1
            }, {
                _id: 2,
                b: 2
            }, {
                _id: 3,
                c: 3
            }];

            hashSet.addAll(items, "_id");

            hashSet.size().should.equal(3);
        });
    });

    describe('remove(item)', function () {
        it('should remove the item from the set', function () {
            hashSet.add(exampleItem, "_id");

            hashSet.remove(exampleItem, "_id").should.equal(true);
        });
    });

    describe('size()', function () {
        it('should return the size of the hash set', function () {
            hashSet.size().should.equal(0);

            hashSet.add(exampleItem, "_id");
            hashSet.size().should.equal(1);
        });
    });
});
