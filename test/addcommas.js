var assert = require('assert');
var addCommas = require('../');

test('works with numbers', function () {
    assert.equal(addCommas(1), '1', 'single digits should match');
    assert.equal(addCommas(12), '12', 'double digits should match');
    assert.equal(addCommas(123), '123', 'triple digits should match');
    assert.equal(addCommas(1234), '1,234', 'four digits should match');
    assert.equal(addCommas(12345), '12,345', 'five digits should match');
    assert.equal(addCommas(123456), '123,456', 'six digits should match');
    assert.equal(addCommas(1234567), '1,234,567', 'seven digits should match');
});

test('works with strings', function () {
    assert.equal(addCommas('1'), '1', 'single digits should match');
    assert.equal(addCommas('12'), '12', 'double digits should match');
    assert.equal(addCommas('123'), '123', 'triple digits should match');
    assert.equal(addCommas('1234'), '1,234', 'four digits should match');
    assert.equal(addCommas('12345'), '12,345', 'five digits should match');
    assert.equal(addCommas('123456'), '123,456', 'six digits should match');
    assert.equal(addCommas('1234567'), '1,234,567', 'seven digits should match');
});

test('fails on decimals', function () {
    assert.throws(function () {
        addCommas(123.45);
    }, 'should throw error on decimals');

    assert.throws(function () {
        addCommas('123.45');
    }, 'should throw error on decimal strings');
});

test('fails on null or undefined', function () {
    assert.throws(function () {
        addCommas();
    });
});

test('fails on non-numeric strings', function () {
    assert.throws(function () {
        addCommas('divide by dogs');
    });
})