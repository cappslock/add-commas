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

test('works with decimals', function () {
    assert.equal(addCommas('1.0123'), '1.0123', 'single digits with decimals should match');
    assert.equal(addCommas('12.0123'), '12.0123', 'double digits with decimals should match');
    assert.equal(addCommas('123.0123'), '123.0123', 'triple digits with decimals should match');
    assert.equal(addCommas('1234.0123'), '1,234.0123', 'four digits with decimals should match');
    assert.equal(addCommas('12345.0123'), '12,345.0123', 'five digits with decimals should match');
    assert.equal(addCommas('123456.0123'), '123,456.0123', 'six digits with decimals should match');
    assert.equal(addCommas('1234567.0123'), '1,234,567.0123', 'seven digits with decimals should match');
});

test('fails on null or undefined', function () {
    assert.throws(function () {
        addCommas();
    });
});
