'use strict';

var greeting = 'hello, world!';

var main = (function () {
  console.log('greeting', greeting);
  return greeting;
});

module.exports = main;
