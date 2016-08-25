const assert = require('chai').assert
const Clock = require('../../lib/clock');

describe('our test bundle', function () {
  it('should work', function () {
    assert(true);
  });
});

describe('our clock', function () {
  it('is an object', function () {
    var clock = new Clock();
    assert.isObject(clock);
  });

  it('should have a function that countDown', function () {
    var clock = new Clock();
    var seconds = 10;
    clock.countDown(seconds);
    //assert that the seconds reaches 0
    assert.equal();
    //assert that the seconds doesn't hit -1
    assert.equal();
  });


});
