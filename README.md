# AnyBase.js
Custom base numbers basic operations - writen in JavaScript, node.js module

A small library providing utility methods to increment base on a custom dictionary.

## Installation

  npm install anybase.js --save

## Usage

Generate a series of strings of 4 chars each.

var AnyBase = require('anybase.js');

var test = new AnyBase('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
var value = 'AAAA';
while (value.length < 5) {
    value = test.toString();
    console.log(value);
    test.increment();
}

## Tests

  npm test

## TODD

- decrement
- add
- substract
- convert to another base

## Contributing

Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release